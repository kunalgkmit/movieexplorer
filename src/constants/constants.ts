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
};

export const monthNames = [
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

export const MIN_DOB = '1925-01-01';

export const GENDER_SELECTION_ARRAY: GenderType[] = [
  {
    genderId: 1,
    genderName: 'MALE',
  },
  {
    genderId: 2,
    genderName: 'FEMALE',
  },
];
