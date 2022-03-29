// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cookie from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';
import { accessTokenSession, refreshTokenSession, setAuthCookie } from '@lib';
import { User } from '@utils/types';

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
        const setCookieRes = await setAuthCookie(refreshedSession, {
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
