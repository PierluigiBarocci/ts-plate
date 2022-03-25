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

    // const refreshOpts = { ...opts };
    // delete refreshOpts.expires;
    // delete refreshOpts.maxAge;

    // Set the cookie in the header of the response
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('auth.session', stringValue, opts)
    );
    // res.setHeader('Set-Cookie', [
    //   cookie.serialize('auth.session', stringValue, opts),
    //   cookie.serialize('auth.refresh', stringValue, refreshOpts),
    // ]);
  } catch (error) {
    console.error('Failed to seal session object', error);
    return;
  }
};

export const getSessionCookie = async (
  cookies: Record<string, string>
): Promise<UserSession> => {
  const fetchedCookies = cookies['auth.session'];

  if (!fetchedCookies) {
    throw new Error('Auth session not found');
  }

  // Decrypt the auth cookie
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const decoded: any =
    process.env.NEXTAUTH_SECRET &&
    (await Iron.unseal(
      fetchedCookies,
      process.env.NEXTAUTH_SECRET,
      Iron.defaults
    ));

  return decoded;
};

// const refreshToken = async ({ token }: { token: TokenData }) => {
//   const { NEXT_PUBLIC_DRUPAL_BASE_URL, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } =
//     process.env;
//   const url = `${NEXT_PUBLIC_DRUPAL_BASE_URL}/oauth/token`;
//   const formData = new URLSearchParams();
//   if (OAUTH_CLIENT_ID && OAUTH_CLIENT_SECRET && token.refresh_token) {
//     formData.append('grant_type', 'refresh_token');
//     formData.append('client_id', OAUTH_CLIENT_ID);
//     formData.append('client_secret', OAUTH_CLIENT_SECRET);
//     formData.append('refresh_token', token.refresh_token);
//   }
//   console.log('LOG::  ~ formData', formData);
//   const response = await fetch(url, {
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       Authorization: token.token_type + ' ' + token.access_token,
//     },
//     body: formData,
//     method: 'POST',
//   });

//   const refreshedTokens: TokenData = await response.json();
//   console.log('LOG::  ~ refreshedTokens', refreshedTokens);
//   return refreshedTokens;
// };
