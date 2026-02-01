import { searchMovies } from '@services/movies.service';
import { useQuery } from '@tanstack/react-query';

export const useSearchMovies = (movieKeyword: string) => {
  return useQuery({
    queryKey: ['searchMovies', movieKeyword],
    queryFn: () => searchMovies(movieKeyword),
    select: data => data?.results ?? [],
    enabled: movieKeyword.trim().length > 0,
  });
};
