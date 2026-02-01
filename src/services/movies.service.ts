import { axiosInstance } from '@network/axiosInstance';
import { ENDPOINTS } from '@network/URLs';

export default async function fetchMovies({
  pageParam,
  sortBy,
  includeVideo,
  language,
  votesGreaterThan,
  releaseYear,
  withGenres,
}: DefaultMovieParams) {
  console.log('MOVIES RESPONSE>>>>>>', {
    pageParam,
    sortBy,
    includeVideo,
    language,
    votesGreaterThan,
    releaseYear,
    withGenres,
  });

  const response = await axiosInstance.get(ENDPOINTS.MOVIES.DISCOVER, {
    params: {
      page: pageParam,
      sort_by: sortBy,
      include_adult: false,
      include_video: includeVideo,
      language: language,
      'vote_average.gte': votesGreaterThan,
      primary_release_year: releaseYear,
      with_genres: withGenres,
    },
  });
  // console.log("MOVIES RESPONSE>>>>>>", response)
  return response.data;
}

export const fetchMovieDetails = async (movieId: number | undefined) => {
  const response = await axiosInstance.get(`/movie/${movieId}`, {
    params: { language: 'en-US' },
  });
  return response.data;
};

export const fetchRecommendedMovies = async (
  movieId: number | undefined,
  pageParam: number,
) => {
  const response = await axiosInstance.get(
    `/movie/${movieId}/recommendations`,
    { params: { language: 'en-US', page: pageParam } },
  );
  return response.data;
};

export const searchMovies = async (movieKeyword: string) => {
  const movieParams = {
    query: movieKeyword,
    include_adult: false,
    language: 'en-US',
    page: '1',
  };
  const response = await axiosInstance.get(ENDPOINTS.MOVIES.SEARCH, {params: movieParams});
  console.log("SEARCH response>>", response)
  return response.data;
};
