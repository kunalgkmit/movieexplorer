import { useInfiniteQuery } from '@tanstack/react-query';

import fetchMovies from '@services/movies.service';

export const useMovies = (params: DefaultMovieParams) => {
  return useInfiniteQuery({
    queryKey: ['Movies', params],
    queryFn: ({ pageParam }) => fetchMovies({ pageParam, ...params }),
    initialPageParam: 1,
    select: data => data.pages,
    getNextPageParam: lastPage => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
};
