import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const u_uid = '';
  try {
    const {
      OAUTH_CLIENT_ID,
      OAUTH_CLIENT_SECRET,
      NEXT_AUTH_ADMIN_USERNAME,
      NEXT_AUTH_ADMIN_PASSWORD,
      NEXT_AUTH_ADMIN_SCOPE,
    } = process.env;
    const url = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/oauth/token`;
    const formData = new URLSearchParams();
    if (
      OAUTH_CLIENT_ID &&
      OAUTH_CLIENT_SECRET &&
      NEXT_AUTH_ADMIN_USERNAME &&
      NEXT_AUTH_ADMIN_PASSWORD &&
      NEXT_AUTH_ADMIN_SCOPE
    ) {
      formData.append('grant_type', 'password');
      formData.append('client_id', OAUTH_CLIENT_ID);
      formData.append('client_secret', OAUTH_CLIENT_SECRET);
      formData.append('username', NEXT_AUTH_ADMIN_USERNAME);
      formData.append('password', NEXT_AUTH_ADMIN_PASSWORD);
      formData.append('scope', NEXT_AUTH_ADMIN_SCOPE);
    }
    const tokenRes = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });
    const tokenData = await tokenRes.json();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/jsonapi/user/user/${u_uid}/relationships/roles`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
          Authorization: `Bearer ${tokenData.access_token}`,
        },
        body: JSON.stringify({
          data: [
            {
              type: 'user_role--user_role',
              id: u_uid,
            },
          ],
        }),
      }
    );
    console.log('LOG::  ~ res', res);
    const data = await res.json();
    console.log('LOG::  ~ data', data);
    response.status(200).json({ data });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return response.status(400).json(error.message);
  }
}
