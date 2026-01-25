import axios from 'axios';

import { ACCESS_TOKEN, BASE_URL } from '@env';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});
