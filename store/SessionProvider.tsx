import { useEffect } from 'react';
import { useLogin, useLogout } from './store';
import { checkValidSession } from '@lib';

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const login = useLogin();
  const logout = useLogout();
  useEffect(() => {
    const checkSession = async () => {
      const user = await checkValidSession();
      user ? login(user) : logout();
    };
    // Check if session is valid
    checkSession();
  }, []);
  return <div>{children}</div>;
};
export { SessionProvider };
