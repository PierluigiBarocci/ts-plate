// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const { REDIRECT_REGISTER } = process.env;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { NEXT_PUBLIC_DRUPAL_BASE_URL } = process.env;
  REDIRECT_REGISTER &&
    res.redirect(
      `${NEXT_PUBLIC_DRUPAL_BASE_URL}/user/register?poetronicart_redirect_uri=${encodeURIComponent(
        REDIRECT_REGISTER
      )}`
    );
}
