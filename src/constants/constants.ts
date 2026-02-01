export const APP_INFO = {
  TITLE: 'Movie Explorer',
  LOGIN_SUBTITLE: 'Login to continue',
};

export const ICONS = {
  HOME: 'home',
  HOME_OUTLINE: 'home-outline',
  HEART: 'heart',
  HEART_OUTLINE: 'heart-outline',
  ACCOUNT: 'person',
  ACCOUNT_OUTLINE: 'person-outline',
  SEARCH: 'search',
  SEARCH_OUTLINE: 'search-outline',
};

export const MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const SORT_OPTIONS = {
  POPULARITY_DESC: 'popularity.desc',
  VOTE_AVG_DESC: 'vote_average.desc',
  RELEASE_DATE_DESC: 'primary_release_date.desc',
  RELEASE_DATE_ASC: 'primary_release_date.asc',
};

export const SORT_SELECTION_ARRAY: SortType[] = [
  {
    sortName: 'High Rated',
    sortOption: SORT_OPTIONS.VOTE_AVG_DESC,
  },
  {
    sortName: 'Upcoming Movies',
    sortOption: SORT_OPTIONS.RELEASE_DATE_DESC,
  },
  {
    sortName: 'Old Movies',
    sortOption: SORT_OPTIONS.RELEASE_DATE_ASC,
  },
];

export const GENRE_SELECTION_ARRAY: GenreType[] = [
  {
    genreId: '28',
    genreName: 'Action',
  },
  {
    genreId: '16',
    genreName: 'Animation',
  },
  {
    genreId: '18',
    genreName: 'Drama',
  },
];

export const sampleImgUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Chromium_T-Rex-error-offline.svg/2560px-Chromium_T-Rex-error-offline.svg.png?20210319220015';

export const sampleBackdrop = 'https://wallpapercave.com/wp/wp5248939.png';
