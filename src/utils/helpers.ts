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
    return '';
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
  if (!pwd) {
    return 'Password is required';
  }

  if (pwd.length < 8) {
    return 'Minimum 8 characters';
  }

  if (!/[A-Z]/.test(pwd)) {
    return 'At least one uppercase letter';
  }

  if (!/[a-z]/.test(pwd)) {
    return 'At least one lowercase letter';
  }

  if (!/\d/.test(pwd)) {
    return 'At least one number';
  }

  if (!/[@$!%*?&]/.test(pwd)) {
    return 'At least one special character (@$!%*?&)';
  }
  return '';
};

export const formatMovieData = (
  flattedData: any[],
  isFavourite: (id: number) => boolean,
) => {
  // console.log("FLAT DATA>>", flattedData)
  return flattedData?.map(movieItem => ({
    movieId: movieItem.id,
    posterPath: movieItem.poster_path,
    title: movieItem.title,
    releaseDate: movieItem.release_date,
    rating: movieItem.vote_average,
    isFavourite: isFavourite(movieItem.id),
  }));
};

export const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age >= 0 ? age : 0;
};

export const validateUserName = (userName: string) => {
  if (!userName.trim().length) {
    return 'Enter Full Name';
  } else if (userName.trim().length < 3) {
    return 'Full name must be of min. 3 characters';
  }else if(!/^[A-Za-z]+( [A-Za-z]+)?$/.test(userName)){
    return 'Only letters allowed and only one space between names'
  }
  return '';
};

export const validateEmail = (email: string) => {
  if (!email.trim().length) {
    return 'Enter Email';
  } else if (!/^[\w.+\-]+@gmail\.com$/.test(email)) {
    return 'Enter Valid Email containing @gmail.com';
  }
  return '';
};

export const validateAge = (age: string) => {
  const numericAge = Number(age);

  if (!age.trim().length) {
    return 'Enter Age';
  } else if (isNaN(Number(age.trim()))) {
    return 'Enter Valid Age';
  } else if (numericAge <= 18 || numericAge > 120) {
    return 'Age must be >18';
  }
  return '';
};

export const validateDOB = (dob: Date | null) => {
  if (dob === null) {
    return 'Date of birth is required';
  }
  return '';
};

export const validateMobileNum = (mobile: string) => {
  if (!mobile.length) {
    return 'Enter Mobile Number';
  } else if (mobile.length < 10) {
    return 'Mobile number must be of 10 digits';
  }
  return '';
};
