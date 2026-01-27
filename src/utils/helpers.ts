import { monthNames } from '@constants/constants';

export const formatDateToReadableDate = (releaseDate: string) => {
  const releaseDateParts = releaseDate.split('-');
  const year = releaseDateParts[0];
  const monthIndex = parseInt(releaseDateParts[1]) - 1;
  const day = releaseDateParts[2];
  const formattedDate = `${monthNames[monthIndex]} ${day}, ${year}`;
  return formattedDate;
};

export const formatMovieRating = (rating: number) => {
  return parseFloat(rating.toFixed(1));
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
