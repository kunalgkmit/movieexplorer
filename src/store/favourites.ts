import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage, persist } from 'zustand/middleware';

interface FavouritesState {
  favourites: Movie[];
  favMoviesIds: number[];

  addFavouriteToStore: (movie: Movie) => void;
  removeFavouriteFromStore: (movieId: number) => void;
  setFavourites: (movies: Movie[]) => void;
  isFavourite: (movieId: number) => boolean;
}

export const useFavMoviesStore = create<FavouritesState>()(
  persist(
    (set, get) => ({
      favourites: [],
      favMoviesIds: [],

      addFavouriteToStore: movie =>
        set(state => {
          if (state.favMoviesIds.includes(movie.movieId)) {
            return state;
          }

          return {
            favourites: [...state.favourites, movie],
            favMoviesIds: [...state.favMoviesIds, movie.movieId],
          };
        }),

      removeFavouriteFromStore: movieId =>
        set(state => ({
          favourites: state.favourites.filter(
            movie => movie.movieId !== movieId,
          ),
          favMoviesIds: state.favMoviesIds.filter(id => id !== movieId),
        })),

      setFavourites: movies =>
        set({
          favourites: movies,
          favMoviesIds: movies.map(movie => movie.movieId),
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
