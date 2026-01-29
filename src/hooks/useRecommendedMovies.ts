import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchRecommendedMovies } from '@services/movies.service';

export const useRecommendedMovies = (movieId: number | undefined) => {
  return useInfiniteQuery({
    queryKey: ['RecommendedMovies', movieId],
    queryFn: ({ pageParam }) => fetchRecommendedMovies(movieId, pageParam),
    initialPageParam: 1,
    select: data => data?.pages?.map(page => page.results).flat() ?? [],
    getNextPageParam: lastPage => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
};
