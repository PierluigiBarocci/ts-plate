import cookie from 'cookie';
import { NextApiResponse } from 'next';

const sendRefreshRedirect = (res: NextApiResponse, path = '/') => {
  res.status(200);
  // Send a 200 response and refresh the page
  res.setHeader('Content-type', 'text/html');
  return res.send(
    `<html><head><meta http-equiv="refresh" content=1;url="${path}"></head></html>`
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiResponse, res: NextApiResponse) => {
  try {
    res.setHeader('Set-Cookie', [
      cookie.serialize('auth.session', 'deleted', {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        path: '/',
        expires: new Date('Thu, 01 Jan 1970 00:00:00 GMT'),
      }),
      cookie.serialize('auth.refresh', 'deleted', {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        path: '/',
        expires: new Date('Thu, 01 Jan 1970 00:00:00 GMT'),
      }),
    ]);

    // Send 200 response to set cookies and refresh the page
    return sendRefreshRedirect(res);
  } catch (error) {
    // You might want to log the error here
    res.status(500).json({
      statusCode: 500,
      message: 'Something went wrong' + error,
    });
  }
};
