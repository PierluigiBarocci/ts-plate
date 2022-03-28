import { NextApiRequest, NextApiResponse } from 'next';
import { setAuthCookie, userDataHelper } from '@lib';
import { TokenData, User, UserSession } from '@utils/types';

const { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, REDIRECT_URI } = process.env;

const sendRefreshRedirect = (res: NextApiResponse, path = '/') => {
  res.status(200);
  // Send a 200 response and refresh the page
  res.setHeader('Content-type', 'text/html');
  return res.send(
    `<html><head><meta http-equiv="refresh" content=1;url="${path}"></head></html>`
  );
};
type Modify<T, R> = Omit<T, keyof R> & R;
type ModifiedNextApiReq = Modify<
  NextApiRequest,
  {
    query: {
      [key: string]: string;
    };
  }
>;

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: ModifiedNextApiReq, res: NextApiResponse) => {
  const { code } = req.query;
  const url = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/oauth/token`;
  const formData = new URLSearchParams();
  if (OAUTH_CLIENT_ID && OAUTH_CLIENT_SECRET && REDIRECT_URI && code) {
    formData.append('grant_type', 'authorization_code');
    formData.append('code', code);
    formData.append('client_id', OAUTH_CLIENT_ID);
    formData.append('client_secret', OAUTH_CLIENT_SECRET);
    formData.append('redirect_uri', REDIRECT_URI);
  }

  try {
    const tokenRes = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });
    const tokenData: TokenData = await tokenRes.json();

    const user: User = await userDataHelper({
      token_type: tokenData.token_type,
      access_token: tokenData.access_token,
    });

    const session: UserSession = {
      user,
      token: tokenData,
    };

    // Send the session information to our user in the form of a cookie header.
    if (tokenData && tokenData.expires_in) {
      await setAuthCookie(res, session, {
        maxAge: tokenData.expires_in * 1000,
      });
    }

    // Send 200 response to set cookies and refresh the page
    return sendRefreshRedirect(res);
  } catch (error) {
    // You might want to log the error here
    res.status(500).json({
      statusCode: 500,
      message: 'Something went wrong',
    });
  }
};
