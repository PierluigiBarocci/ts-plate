import { createContext, useEffect, useState } from 'react';
import { User } from '@utils/types';

interface ContextProps {
  user: User;
}

const defaultState = {
  user: {
    name: '',
    preferred_username: '',
    email: '',
    email_verified: false,
    profile: '',
    locale: '',
    zoneinfo: '',
    updated_at: '',
  },
};

const AuthContext = createContext<ContextProps>(defaultState);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(defaultState.user);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const res = await fetch(`/api/auth/check-user`);
      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
      } else {
        setUser(defaultState.user);
      }
    };

    // Check if user is logged in
    checkUserLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
