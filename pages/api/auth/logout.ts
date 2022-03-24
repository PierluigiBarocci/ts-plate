// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { NEXT_PUBLIC_DRUPAL_BASE_URL } = process.env;
  res.redirect(`${NEXT_PUBLIC_DRUPAL_BASE_URL}/user/logout`);
}
