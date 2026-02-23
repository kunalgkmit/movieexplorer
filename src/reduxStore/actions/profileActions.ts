import { axiosInstance } from '@network/axiosInstance';
import * as types from '../actionTypes/profileActions';
import { ENDPOINTS } from '@network/URLs';

export const setStoreFullName = (name: string) => ({
  type: types.SET_FULL_NAME,
  payload: name,
});

export const setStoreEmail = (email: string) => ({
  type: types.SET_EMAIL,
  payload: email,
});

export const setStoreMobileNumber = (number: number) => ({
  type: types.SET_MOBILE_NUMBER,
  payload: number,
});

export const setStoreDOB = (dob: string) => ({
  type: types.SET_DOB,
  payload: dob,
});

export const setStoreAge = (age: string) => ({
  type: types.SET_AGE,
  payload: age,
});

export const setStoreGender = (gender: string) => ({
  type: types.SET_GENDER,
  payload: gender,
});

export const setStoreHasProfile = (value: boolean) => ({
  type: types.SET_HAS_PROFILE,
  payload: value,
});

export const setStoreHasError = (message: string) => ({
  type: types.SET_ERROR,
  payload: message,
});

export const resetStoreProfile = () => ({
  type: types.RESET_PROFILE,
});

export const getStoreFavourites = () => {
  return async (dispatch: any, getState: any) => {
    console.log('EXPERIMANTAL>>>', getState());
    try {
      const response = await axiosInstance.get(
        ENDPOINTS.FAVOURITES.GET_FAVOURITES,
      );
      dispatch({
        type: 'todos/setTodos',
        payload: response.data.results.map((movie: any) => {
          const {
            id: movieId,
            title,
            poster_path: posterPath,
            release_date: releaseDate,
            vote_average: rating,
          } = movie;
          return {
            movieId,
            title,
            posterPath,
            releaseDate,
            rating,
            isFavourite: true,
          };
        }),
      });
    } catch (error) {
      console.log('ERROR HAPPENS>>', error);
    }
  };
};
