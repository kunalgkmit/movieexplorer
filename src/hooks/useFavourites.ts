import { useMutation } from '@tanstack/react-query';

import { getFavourites, updateFavourites } from '@services/favourites.service';
import { useFavMoviesStore } from '@store/favourites';
import { store } from 'reduxStore/store';

export const fetchFavourites = async () => {
  const data = await getFavourites();
  const { setFavourites } = useFavMoviesStore.getState();

  const favMovies = data.results.map((movie: any) => {
    const {
      id: movieId,
      title,
      poster_path: posterPath,
      release_date: releaseDate,
      vote_average: rating,
    } = movie;
    return {
      movieId,
      title,
      posterPath,
      releaseDate,
      rating,
      isFavourite: true,
    };
  });

  store.dispatch({ type: 'todos/setTodos', payload: favMovies });

  setFavourites(favMovies);
};

export const useFavourites = () =>
  useMutation({
    mutationFn: updateFavourites,
    onSuccess: data => {
      fetchFavourites();
    },
  });
