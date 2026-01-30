import { axiosInstance } from '@network/axiosInstance';
import { ENDPOINTS } from '@network/URLs';

export const fetchUserDetails = async () => {
  const response = await axiosInstance.get(ENDPOINTS.USER_DETAILS);
  return response.data;
};
