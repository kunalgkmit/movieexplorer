import { getFavourites, updateFavourites } from '@services/favourites.service';
import { useFavMovies } from '@store/favourites';
import { useMutation } from '@tanstack/react-query';

const fetchFavs = async () => {
  const data = await getFavourites();
  
  const favMovies = data.results.map((movie: any) => ({
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    rating: movie.vote_average,
  }));

  useFavMovies.setState({
    favourites: favMovies,
  });
};

export const useFavourites = () =>
  useMutation({
    mutationFn: updateFavourites,
    onSuccess: data => {
      fetchFavs();
    },
  });
