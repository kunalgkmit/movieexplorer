import { getFavourites, updateFavourites } from '@services/favourites.service';
import { useFavMovies } from '@store/favourites';
import { useMutation } from '@tanstack/react-query';

const fetchFavs = async () => {
  const data = await getFavourites();

  const favMovies = data.results.map((movie: any) => {
    const { id, title, poster_path, release_date, vote_average } = movie;
    return {
      id,
      title,
      poster_path,
      release_date,
      rating: vote_average,
    };
  });

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
