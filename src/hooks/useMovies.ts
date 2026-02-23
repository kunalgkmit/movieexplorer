import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import fetchMovies from '@services/movies.service';
import { useEffect, useMemo, useState } from 'react';

// export const useMovies = (params: DefaultMovieParams) => {
//   return useInfiniteQuery({
//     queryKey: ['Movies', params],
//     queryFn: ({ pageParam }) => fetchMovies({ pageParam, ...params }),
//     initialPageParam: 1,
//     select: data => data?.pages?.map(page => page.results).flat() ?? [],
//     getNextPageParam: lastPage => {
//       if (lastPage.page < lastPage.total_pages) {
//         return lastPage.page + 1;
//       }
//       return undefined;
//     },
//   });
// };


let finalMovies: Movie[] = [];

export const useMovies = (params: DefaultMovieParams) => {
  const [page, setPage] = useState(1);
  const [allMovies, setAllMovies] = useState<Movie[]>([]);

  const query = useQuery({
    queryKey: ['Movies', params, page],
    queryFn: () => fetchMovies({ ...params, pageParam: page }),
  });

  const uniqueMovies = useMemo(() => {
    if (query.data?.results) {
      const movieArr: Movie[] = [...finalMovies, ...query.data?.results];
      const uniqArr = [...new Map(movieArr.map(item => [item.id, item])).values()]
      finalMovies = [...uniqArr]
      return uniqArr;
    }
  }, [query.data]);

  // console.log('fina', finalMovies)

  // useEffect(() => {
  //   if (query.data?.results) {
  //     setAllMovies(prev => {
  //       const tempArr: Movie[] = [...prev, ...query.data?.results];

  //       let uniqueMovies: Movie[] = [
  //         ...new Map(tempArr.map(item => [item.id, item])).values(),
  //       ];
  //       // uniqueMovieIds.forEach(id => {
  //       //   const movie = tempArr.find(movie => movie.id === id);
  //       //   uniqueMovies.push(movie);
  //       // });

  //       // uniqueMovies.forEach(movie => {
  //       //   if (!movie.title) {
  //       //     console.log('BLANK MOVIE>>>', movie);
  //       //   }
  //       // });

  //       // const uniqueMovieIds = new Set(prev.map(movie => movie.movieId));
  //       // const uniqueMovies = query.data.results.filter(
  //       //   movie => !uniqueMovieIds.has(movie.id),
  //       // );
  //       return uniqueMovies;
  //     });
  //   }
  // }, [query.data]);

  useEffect(() => {
    setAllMovies([]);
    setPage(1);
  }, [
    params.sortBy,
    params.votesGreaterThan,
    params.releaseYear,
    params.withGenres,
  ]);

  const getNextPageData = () => {
    if (query.isFetching) return;
    if (page < query.data?.total_pages) {
      // console.log('getNextPageData PAGE NUMBER>>', page, allMovies.length);

      setPage(prev => prev + 1);
    }
  };

  return {
    data: uniqueMovies || finalMovies,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    getNextPageData: getNextPageData,
    isFetching: query.isFetching,
    page: page,
  };
};
