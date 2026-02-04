import { monthNames } from '@constants/constants';

export const formatDateToReadableDate = (releaseDate: string) => {
  if (releaseDate) {
    const releaseDateParts = releaseDate.split('-');
    const year = releaseDateParts[0];
    const monthIndex = parseInt(releaseDateParts[1]) - 1;
    const day = releaseDateParts[2];
    const formattedDate = `${monthNames[monthIndex]} ${day}, ${year}`;
    return formattedDate;
  } else {
    ('');
  }
};

export const formatMovieRating = (rating: number) => {
  if (rating) {
    return parseFloat(rating.toFixed(1));
  } else {
    return '';
  }
};

export const validatePassword = (pwd: string) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!pwd) {
    return 'Password is required.';
  }
  if (!passwordRegex.test(pwd)) {
    return 'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.';
  }
  return '';
};

export const formatMovieData = (
  flattedData: any[],
  isFavourite: (id: number) => boolean,
) => {
  return flattedData?.map(movieItem => ({
    movieId: movieItem.id,
    posterPath: movieItem.poster_path,
    title: movieItem.title,
    releaseDate: movieItem.release_date,
    rating: movieItem.vote_average,
    isFavourite: isFavourite(movieItem.id),
  }));
};

export const movieRatingValidator = (rating: string) => {
  if (rating.length === 0) {
    return '';
  }
  const ratingInNum = parseFloat(rating);
  if (ratingInNum <= 0 || ratingInNum > 10 || isNaN(ratingInNum)) {
    return 'Please Enter Valid Rating';
  }
  return '';
};

export const movieReleaseYearValidator = (releaseYear: string) => {
  if (releaseYear.length === 0) {
    return '';
  }
  const releaseYearInNum = parseInt(releaseYear);
  if (isNaN(releaseYearInNum) || releaseYear.length > 4) {
    return 'Please Enter Valid Release Year';
  }
  return '';
};
