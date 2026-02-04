import { useQuery } from '@tanstack/react-query';

import { fetchRecommendedMovies } from '@services/movies.service';
import { formatMovieData } from '@utils/helpers';
import { useFavMoviesStore } from '@store/favourites';

export const useRecommendedMovies = (movieId: number) => {
  const favMovieIds = useFavMoviesStore(state => state.favMoviesIds);
  const isFavourite = useFavMoviesStore(state => state.isFavourite);
  return useQuery({
    queryKey: ['RecommendedMovies', movieId],
    queryFn: () => fetchRecommendedMovies(movieId),
    select: data => {
      const recommendedMovies = data?.results ?? [];

      return formatMovieData(recommendedMovies, isFavourite);
    },
  });
};
