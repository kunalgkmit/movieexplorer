import { axiosInstance } from '@network/axiosInstance';
import { ENDPOINTS } from '@network/URLs';

export default async function fetchMovies({
  pageParam,
  sortBy,
  includeVideo,
  language,
  votesGreaterThan,
  releaseYear,
  withGenres
}: DefaultMovieParams) {
  const response = await axiosInstance.get(ENDPOINTS.MOVIES.DISCOVER, {
    params: {
      page: pageParam,
      sort_by: sortBy,
      include_adult: false,
      include_video: includeVideo,
      language: language,
      'vote_average.gte' : votesGreaterThan,
      primary_release_year: releaseYear,
      with_genres: withGenres
    },
  });
  return response.data;
}

export const fetchMovieDetails = async (movieId: number | undefined) => {
  const response = await axiosInstance.get(`/movie/${movieId}`, {
    params: { language: 'en-US' },
  });
  console.log(response.data);
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
  console.log(response.data);
  return response.data;
};
