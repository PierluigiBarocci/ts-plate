// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cookie from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSessionCookie, setAuthCookie } from '@lib';
import { TokenData, User, UserSession } from '@utils/types';

type Data = {
  user?: User;
  errorMessage?: string;
};
const defaultState = {
  user: undefined,
  errorMessage: 'User not authenticated',
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const cookies = cookie.parse(req.headers.cookie || '');
    const session: Data = defaultState;
    if (cookies['auth.session']) {
      const accessSession = await accessTokenSession(cookies['auth.session']);
      console.log('LOG::  ~ accessSession', accessSession);
      if (accessSession) {
        session.user = accessSession.user;
        session.errorMessage = undefined;
      }
    } else {
      const refreshedSession = await refreshTokenSession(
        cookies['auth.refresh']
      );
      if (refreshedSession?.token.expires_in) {
        // 3 - setCookie to the headers;
        const setCookieRes = await setAuthCookie(res, refreshedSession, {
          maxAge: refreshedSession?.token.expires_in * 1000,
        });
        if (setCookieRes) {
          const { stringValue, opts, refreshOpts } = setCookieRes;
          res.setHeader('Set-Cookie', [
            cookie.serialize('auth.session', stringValue, opts),
            cookie.serialize('auth.refresh', stringValue, refreshOpts),
          ]);
          session.user = refreshedSession.user;
          session.errorMessage = undefined;
        }
      }
    }

    res.status(200).json(session);
  } catch {
    res.status(401).json(defaultState);
  }
}

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
      user,
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
