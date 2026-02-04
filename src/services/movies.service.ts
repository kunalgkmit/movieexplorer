import { axiosInstance } from '@network/axiosInstance';
import { ENDPOINTS } from '@network/URLs';

export default async function fetchMovies({
  pageParam,
  sortBy,
  includeVideo,
  language,
}: DefaultMovieParams) {
  const response = await axiosInstance.get(ENDPOINTS.MOVIES.DISCOVER, {
    params: {
      page: pageParam,
      sort_by: sortBy,
      include_adult: false,
      include_video: includeVideo,
      language: language,
    },
  });
  return response.data;
}

export const fetchMovieDetails = async (movieId: number) => {
  const response = await axiosInstance.get(`/movie/${movieId}`, {
    params: { language: 'en-US' },
  });
  return response.data;
};

export const fetchRecommendedMovies = async (
  movieId: number,
) => {
  const response = await axiosInstance.get(
    `/movie/${movieId}/recommendations`,
    { params: { language: 'en-US' } },
  );
  return response.data;
};
