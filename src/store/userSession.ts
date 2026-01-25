import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useUserSession = create<UserSession>()(
  persist(
    set => ({
      sessionId: '',
      isLoggedIn: false,
      isSessionHydrated: false
    }),
    {
      name: 'user-session-storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => {
        return () => {
          useUserSession.setState({ isSessionHydrated: true });
        };
      },
    },
  ),
);
