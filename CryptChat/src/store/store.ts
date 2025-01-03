import {create} from 'zustand';

interface AppState {
  isLoggedIn: boolean;
}

const useStore = create<AppState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (value: boolean) => set({isLoggedIn: value}),

}));

export default useStore;

