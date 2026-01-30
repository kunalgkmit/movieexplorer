import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { fetchRecommendedMovies } from '@services/movies.service';

export const useRecommendedMovies = (movieId:number|undefined) => {
  return useQuery({
    queryKey: ['RecommendedMovies', movieId],
    queryFn: () => fetchRecommendedMovies(movieId, 1),
    select: data => data?.results ?? [],
  });
};
