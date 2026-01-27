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
