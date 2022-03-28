import create from 'zustand';
import { UserSession } from '@utils/types';

type Store = {
  session?: UserSession;
  addSession: (session: UserSession) => void;
  removeSession: () => void;
};

const useStore = create<Store>(
  (set): Store => ({
    session: undefined,
    addSession: session => set(() => ({ session })),
    removeSession: () => set(() => ({ session: undefined })),
  })
);

const useUser = () => useStore(state => state?.session?.user);
const useToken = () => useStore(state => state?.session?.token);
const useLogin = () => useStore(state => state.addSession);
const useLogout = () => useStore(state => state.removeSession);

export { useUser, useToken, useLogin, useLogout };
