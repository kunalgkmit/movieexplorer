interface UserSessionStore {
  sessionId: string;
  isLoggedIn: boolean;
  isSessionHydrated: boolean;
}