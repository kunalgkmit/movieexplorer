export const ENDPOINTS = {
  AUTH: {
    REQUEST_TOKEN: '/authentication/token/new',
    SESSION_LOGIN: '/authentication/token/validate_with_login',
    CREATE_SESSION: '/authentication/session/new',
  },

  MOVIES: {
    POPULARITY_DESC:
      '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
  },
};
