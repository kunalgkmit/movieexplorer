import { axiosInstance } from '@network/axiosInstance';
import { ENDPOINTS } from '@network/URLs';

export const getFavourites = async () => {
  const response = await axiosInstance.get(ENDPOINTS.FAVOURITES.GET_FAVOURITES);
  return response.data;
};

export const updateFavourites = async ({
  movieId,
  isFavourite,
}: {
  movieId: number;
  isFavourite: boolean;
}) => {
  const favBody = {
    media_type: 'movie',
    media_id: movieId,
    favorite: isFavourite,
  };
  const response = await axiosInstance.post(
    ENDPOINTS.FAVOURITES.MODIFY_FAVOURITES,
    favBody,
  );
  return response.data
};
