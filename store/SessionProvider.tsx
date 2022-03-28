import { useEffect } from 'react';
import { useLogin, useLogout } from './store';
import { UserSession } from '@utils/types';

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const login = useLogin();
  const logut = useLogout();
  useEffect(() => {
    const checkValidSession = async () => {
      const res = await fetch(`/api/auth/check-session`);
      const session: UserSession = await res.json();
      if (res.ok) {
        login(session);
      } else {
        logut();
      }
    };

    // Check if session is valid
    checkValidSession();
  }, []);
  return <div>{children}</div>;
};
export { SessionProvider };
