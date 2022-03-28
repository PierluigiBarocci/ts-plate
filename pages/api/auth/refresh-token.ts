// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { TokenData } from '@utils/types';

type Data = {
  token: TokenData;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { NEXT_PUBLIC_DRUPAL_BASE_URL, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } =
    process.env;
  const { token, refresh } = JSON.parse(req.body);
  const url = `${NEXT_PUBLIC_DRUPAL_BASE_URL}/oauth/token`;
  const formData = new URLSearchParams();
  if (OAUTH_CLIENT_ID && OAUTH_CLIENT_SECRET && refresh) {
    formData.append('grant_type', 'refresh_token');
    formData.append('client_id', OAUTH_CLIENT_ID);
    formData.append('client_secret', OAUTH_CLIENT_SECRET);
    formData.append('refresh_token', refresh);
  }
  console.log('LOG::  ~ formData', formData);
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: token.token_type + ' ' + token.access_token,
    },
    body: formData,
    method: 'POST',
  });

  const refreshedTokens: TokenData = await response.json();
  res.status(200).json({ token: refreshedTokens });
}
