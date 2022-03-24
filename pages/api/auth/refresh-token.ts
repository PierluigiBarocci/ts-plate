// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { NEXT_PUBLIC_DRUPAL_BASE_URL, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } =
    process.env;
  const { token, refresh } = JSON.parse(req.body);
  console.log('LOG::  ~ token', token);
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

  const refreshedTokens = await response.json();
  console.log('LOG::  ~ refreshedTokens', refreshedTokens);
  res.status(200).json({ name: 'John Doe' });
}