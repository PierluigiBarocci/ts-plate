import create from 'zustand';
import { User } from '@utils/types';

type Store = {
  user?: User;
  addUser: (user: User) => void;
  removeUser: () => void;
};

const useStore = create<Store>(
  (set): Store => ({
    user: undefined,
    addUser: user => set(() => ({ user })),
    removeUser: () => set(() => ({ user: undefined })),
  })
);

const useUser = () => useStore(state => state.user);
const useLogin = () => useStore(state => state.addUser);
const useLogout = () => useStore(state => state.removeUser);

export { useUser, useLogin, useLogout };
