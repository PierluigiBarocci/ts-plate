// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { setAuthCookie } from '@lib';
import { TokenData, UserSession } from '@utils/types';

type Data = {
  token?: TokenData;
  errorMessage?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const {
      NEXT_PUBLIC_DRUPAL_BASE_URL,
      OAUTH_CLIENT_ID,
      OAUTH_CLIENT_SECRET,
    } = process.env;
    const { token, refresh, user } = JSON.parse(req.body);
    const url = `${NEXT_PUBLIC_DRUPAL_BASE_URL}/oauth/token`;
    const formData = new URLSearchParams();
    if (OAUTH_CLIENT_ID && OAUTH_CLIENT_SECRET && refresh) {
      formData.append('grant_type', 'refresh_token');
      formData.append('client_id', OAUTH_CLIENT_ID);
      formData.append('client_secret', OAUTH_CLIENT_SECRET);
      formData.append('refresh_token', refresh);
    }
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: token.token_type + ' ' + token.access_token,
      },
      body: formData,
      method: 'POST',
    });

    const refreshedTokens: TokenData = await response.json();
    if (response.ok && refreshedTokens.expires_in) {
      const session: UserSession = {
        user,
        token: refreshedTokens,
      };
      await setAuthCookie(res, session, {
        maxAge: refreshedTokens.expires_in * 1000,
      });
      res.status(200).json({ token: refreshedTokens });
    }
  } catch {
    res.status(401).json({ errorMessage: 'User not authenticated' });
  }
}
