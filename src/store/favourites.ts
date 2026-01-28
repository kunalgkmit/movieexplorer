import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage, persist } from 'zustand/middleware';

interface FavouritesState {
  favourites: FavMovie[];
  favMoviesIds: number[];

  addFavourite: (movie: FavMovie) => void;
  removeFavourite: (movieId: number) => void;
  setFavourites: (movies: FavMovie[]) => void;
  isFavourite: (movieId: number) => boolean;
}

export const useFavMovies = create<FavouritesState>()(
  persist(
    (set, get) => ({
      favourites: [],
      favMoviesIds: [],

      addFavourite: movie =>
        set(state => {
          if (state.favMoviesIds.includes(movie.id)) {
            return state;
          }

          return {
            favourites: [...state.favourites, movie],
            favMoviesIds: [...state.favMoviesIds, movie.id],
          };
        }),

      removeFavourite: movieId =>
        set(state => ({
          favourites: state.favourites.filter(movie => movie.id !== movieId),
          favMoviesIds: state.favMoviesIds.filter(id => id !== movieId),
        })),

      setFavourites: movies =>
        set({
          favourites: movies,
          favMoviesIds: movies.map(movie => movie.id),
        }),

      isFavourite: movieId => {
        return get().favMoviesIds.includes(movieId);
      },
    }),
    {
      name: 'favourites-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
