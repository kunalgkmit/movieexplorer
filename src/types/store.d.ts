interface UserSessionStore {
  sessionId: string;
  isLoggedIn: boolean;
  isSessionHydrated: boolean;
}

interface FavMovie {
  id: number;
  posterPath: string;
  title: string;
  releaseDate: string;
  rating: number;
}
