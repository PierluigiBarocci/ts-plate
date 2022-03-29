import { TokenData, User } from '@utils/types';

interface RefreshTokenProps {
  user: User;
  access_token: string;
  refresh_token: string;
}

const checkValidSession = async () => {
  const res = await fetch(`/api/auth/check-session`);
  const data: { user?: User; errorMessage?: string } = await res.json();
  return res.ok && !data.errorMessage && data.user;
};

const refreshToken = async ({
  user,
  access_token,
  refresh_token,
}: RefreshTokenProps) => {
  const res = await fetch('api/auth/refresh-token', {
    method: 'POST',
    body: JSON.stringify({
      token: access_token,
      refresh: refresh_token,
      user,
    }),
  });
  const data: { token: TokenData } = await res.json();
  return res.ok && data.token;
};

export { checkValidSession, refreshToken };
