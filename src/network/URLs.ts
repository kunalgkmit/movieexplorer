import { ACCOUNT_ID } from "@env";

export const ENDPOINTS = {
  AUTH: {
    REQUEST_TOKEN: '/authentication/token/new',
    SESSION_LOGIN: '/authentication/token/validate_with_login',
    CREATE_SESSION: '/authentication/session/new',
  },

  MOVIES: {
    DISCOVER: '/discover/movie',
  },

  FAVOURITES: {
    GET_FAVOURITES: `/account/${ACCOUNT_ID}/favorite/movies`,
    MODIFY_FAVOURITES: `/account/${ACCOUNT_ID}/favorite`
  }
};
