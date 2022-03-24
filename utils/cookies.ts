import cookie from 'cookie';
import Iron from 'iron';
import { NextApiResponse } from 'next';
import { CookieSerializeOptions } from 'next/dist/server/web/types';
import { UserSession } from './types';

const { NEXTAUTH_SECRET } = process.env;

export const setAuthCookie = async (
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

    // Set the cookie in the header of the response
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('auth.session', stringValue, opts)
    );
  } catch (error) {
    console.error('Failed to seal session object', error);
    return;
  }
};
