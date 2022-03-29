import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const u_uid = 'd32d1f21-4f41-4a09-b3ce-e777308c6711';
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/jsonapi/user/user/${u_uid}/relationships/roles`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
          Authorization: 'Bearer ciao',
        },
        body: JSON.stringify({
          data: [
            {
              type: 'user_role--user_role',
              id: 'bcb2ba8b-79a2-4247-b122-d0036874a1f9',
            },
          ],
        }),
      }
    );
    const data = await res.json();
    console.log('LOG::  ~ data', data);
    response.status(200).json({ data });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return response.status(400).json(error.message);
  }
}
