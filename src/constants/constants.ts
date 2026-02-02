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
  'https://images.steamusercontent.com/ugc/1613934288762909786/049D1992EB339B8BC6687937E06042EBEBE332E2/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false';

export const sampleBackdrop =
  'https://images.steamusercontent.com/ugc/1756948115632536033/AA2E2A427FA79E5C210B2FE0767324E0597FE196/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false';
