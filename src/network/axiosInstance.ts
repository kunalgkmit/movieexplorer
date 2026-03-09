import axios from 'axios';

import { ACCESS_TOKEN, BASE_URL } from '@env';
import { CLIENT_ERRORS } from '@constants/network';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

axiosInstance.interceptors.response.use(
  response => response,

  error => {
    let errorMessage = 'An unexpected error occurred. Please try again.';
    if (error.response) {
      const { status } = error.response;
      if (status === CLIENT_ERRORS.UNAUTHORIZED) {
        errorMessage = 'Invalid username or password. Please try again.';
      }
    } else {
      errorMessage =
        'Server is not reachable. Please check your internet connection.';
    }
    throw new Error(errorMessage);
  },
);
