// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cookie from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSessionCookie } from '@utils/cookies';
import { User, UserSession } from '@utils/types';

type Data = {
  user?: User;
  errorMessage?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const cookies = cookie.parse(req.headers.cookie || '');
    const session: UserSession = await getSessionCookie(cookies);
    res.status(200).json({ user: session.user });
  } catch {
    res.status(401).json({ errorMessage: 'User not authenticated' });
  }
}
