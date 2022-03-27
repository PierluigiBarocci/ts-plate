import { useEffect } from 'react';
import { useLogin, useLogout } from './store';

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const login = useLogin();
  const logut = useLogout();
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const res = await fetch(`/api/auth/check-user`);
      const data = await res.json();
      if (res.ok) {
        login(data.user);
      } else {
        logut();
      }
    };

    // Check if user is logged in
    checkUserLoggedIn();
  }, []);
  return <div>{children}</div>;
};
export { UserProvider };
