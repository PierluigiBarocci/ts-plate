import Iron from 'iron';

import { CookieSerializeOptions } from 'next/dist/server/web/types';
import { TokenData, User, UserSession } from '../utils/types';
import { userDataHelper } from './user-helper';

const { NEXTAUTH_SECRET } = process.env;

const setAuthCookie = async (
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

    return { stringValue, opts, refreshOpts };
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

const accessTokenSession = async (cookie: string) =>
  cookie && (await getSessionCookie(cookie));

const refreshTokenSession = async (cookie: string) => {
  /**
   * Need to handle Refresh_Token:
   * 1 - get it from the headers;
   * 2 - call drupal to get another access_token;
   * 3 - setCookie to the headers;
   * 4 - return the user
   */

  try {
    //1 - get it from the headers;
    const oldSession = await getSessionCookie(cookie);
    const {
      NEXT_PUBLIC_DRUPAL_BASE_URL,
      OAUTH_CLIENT_ID,
      OAUTH_CLIENT_SECRET,
    } = process.env;
    const {
      token: { refresh_token },
    } = oldSession;
    //2 - call drupal to get another access_token;
    const url = `${NEXT_PUBLIC_DRUPAL_BASE_URL}/oauth/token`;
    const formData = new URLSearchParams();
    if (OAUTH_CLIENT_ID && OAUTH_CLIENT_SECRET && refresh_token) {
      formData.append('grant_type', 'refresh_token');
      formData.append('client_id', OAUTH_CLIENT_ID);
      formData.append('client_secret', OAUTH_CLIENT_SECRET);
      formData.append('refresh_token', refresh_token);
    }
    const response = await fetch(url, {
      body: formData,
      method: 'POST',
    });
    const refreshedTokens: TokenData = await response.json();
    if (response.ok && refreshedTokens.expires_in) {
      const user: User = await userDataHelper({
        token_type: refreshedTokens.token_type,
        access_token: refreshedTokens.access_token,
      });
      const session: UserSession = {
        user,
        token: refreshedTokens,
      };
      return session;
    }
  } catch (err) {
    throw new Error('Auth session not found');
  }
};

export {
  setAuthCookie,
  getSessionCookie,
  accessTokenSession,
  refreshTokenSession,
};
