import Iron from 'iron';
import { NextApiResponse } from 'next';
import { CookieSerializeOptions } from 'next/dist/server/web/types';
import { UserSession } from '../utils/types';

const { NEXTAUTH_SECRET } = process.env;

const setAuthCookie = async (
  res: NextApiResponse,
  session: UserSession,
  options: CookieSerializeOptions = {}
) => {
  const defaults: CookieSerializeOptions = {
    maxAge: 3600 * 1000 * 5,
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
  };
  const opts: CookieSerializeOptions = { ...defaults, ...options };

  try {
    // We're encrypting our session here using the NEXTAUTH_SECRET defined in our
    // .env file.
    const signedSession =
      NEXTAUTH_SECRET &&
      (await Iron.seal(session, NEXTAUTH_SECRET, Iron.defaults));

    const stringValue =
      typeof signedSession === 'object'
        ? 'j:' + JSON.stringify(signedSession)
        : String(signedSession);

    if (opts.maxAge) {
      opts.expires = new Date(Date.now() + opts.maxAge);
      opts.maxAge /= 1000;
    }

    const refreshOpts = { ...opts };
    delete refreshOpts.expires;
    delete refreshOpts.maxAge;

    // Set the cookie in the header of the response
    // res.setHeader(
    //   'Set-Cookie',
    //   cookie.serialize('auth.session', stringValue, opts)
    // );

    return { stringValue, opts, refreshOpts };
    // res.setHeader('Set-Cookie', [
    //   cookie.serialize('auth.session', stringValue, opts),
    //   cookie.serialize('auth.refresh', stringValue, refreshOpts),
    // ]);
  } catch (error) {
    console.error('Failed to seal session object', error);
    return;
  }
};

const getSessionCookie = async (cookie: string): Promise<UserSession> => {
  if (!cookie) {
    throw new Error('Auth session not found');
  }

  // Decrypt the auth cookie
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const decoded: any =
    process.env.NEXTAUTH_SECRET &&
    (await Iron.unseal(cookie, process.env.NEXTAUTH_SECRET, Iron.defaults));

  return decoded;
};

export { setAuthCookie, getSessionCookie };
