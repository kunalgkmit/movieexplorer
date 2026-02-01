import { ACCOUNT_ID } from '@env';

export const ENDPOINTS = {
  AUTH: {
    REQUEST_TOKEN: '/authentication/token/new',
    SESSION_LOGIN: '/authentication/token/validate_with_login',
    CREATE_SESSION: '/authentication/session/new',
    DELETE_SESSION: '/authentication/session',
  },

  MOVIES: {
    DISCOVER: '/discover/movie',
    SEARCH: 'https://api.themoviedb.org/3/search/movie',
  },

  FAVOURITES: {
    GET_FAVOURITES: `/account/${ACCOUNT_ID}/favorite/movies`,
    MODIFY_FAVOURITES: `/account/${ACCOUNT_ID}/favorite`,
  },

  USER_DETAILS: `/account/${ACCOUNT_ID}`,
};
