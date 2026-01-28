interface UserSessionStore {
  sessionId: string;
  isLoggedIn: boolean;
  isSessionHydrated: boolean;
}

interface FavMovie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
  rating: number;
}
