// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const { REDIRECT_REGISTER, NEXT_PUBLIC_DRUPAL_BASE_URL, NEXTAUTH_URL } =
  process.env;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  REDIRECT_REGISTER &&
    res.redirect(
      `${NEXT_PUBLIC_DRUPAL_BASE_URL}/user/register?poetronicart_redirect_uri=${encodeURIComponent(
        `${NEXTAUTH_URL}/${REDIRECT_REGISTER}`
      )}`
    );
}
