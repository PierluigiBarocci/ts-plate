import { User } from '@utils/types';

type CheckValidSessionRes = {
  user?: User;
  errorMessage?: string;
};

const checkValidSession = async () => {
  const res = await fetch(`/api/auth/check-session`);
  const data: CheckValidSessionRes = await res.json();
  return res.ok && !data.errorMessage && data.user;
};

export { checkValidSession };
