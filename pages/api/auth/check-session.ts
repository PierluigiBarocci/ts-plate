// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cookie from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSessionCookie } from '@lib';
import { UserSession } from '@utils/types';

type Data = {
  session?: UserSession;
  errorMessage?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const cookies = cookie.parse(req.headers.cookie || '');
    const session: UserSession = await getSessionCookie(cookies);
    res.status(200).json({ session });
  } catch {
    res.status(401).json({ errorMessage: 'User not authenticated' });
  }
}
