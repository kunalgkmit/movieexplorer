import { CLIENT_ERRORS } from '@constants/network';
import { axiosInstance } from '@network/axiosInstance';
import { ENDPOINTS } from '@network/URLs';

export default async function fetchMovies({
  pageParam,
  sortBy,
  includeVideo,
  language,
}: DefaultMovieParams) {
  try {
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
  } catch (error: any) {
    if (error.response) {
      const { status } = error.response;
      if (status === CLIENT_ERRORS.UNAUTHORIZED) {
        throw new Error("Unauthorized, can't access movies.");
      }
    } else {
      throw new Error(
        'Server is not reachable. Please check your internet connection.',
      );
    }
  }
}
