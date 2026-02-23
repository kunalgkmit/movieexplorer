import * as types from '../actionTypes/profileActions';

const initialState = {
  fullName: '',
  email: '',
  mobileNumber: '',
  dateOfBirth: '',
  age: '',
  gender: '',
  hasProfile: false,
  error: '',
};

export const profileReducer = (state = initialState, action: any) => {
  console.log('FULL NAME>>>>>', action);

  switch (action.type) {
    case types.SET_FULL_NAME:
      return { ...state, fullName: action.payload };

    case types.SET_EMAIL:
      return { ...state, email: action.payload };

    case types.SET_MOBILE_NUMBER:
      return { ...state, mobileNumber: action.payload };

    case types.SET_DOB:
      return { ...state, dateOfBirth: action.payload };

    case types.SET_AGE:
      return { ...state, age: action.payload };

    case types.SET_GENDER:
      return { ...state, gender: action.payload };

    case types.SET_HAS_PROFILE:
      return { ...state, hasProfile: action.payload };

    case types.SET_ERROR:
      return { ...state, error: action.payload };

    case types.SET_CLEAR_ERROR:
      return { ...state, error: action.payload };

    case types.RESET_PROFILE:
      return {
        fullName: '',
        email: '',
        mobileNumber: '',
        dateOfBirth: '',
        age: '',
        gender: '',
        error: '',
        hasProfile: false,
      };

    default:
      return state;
  }
};
