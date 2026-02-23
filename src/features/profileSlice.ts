import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    fullName: '',
    email: '',
    mobileNumber: '',
    dateOfBirth: '',
    age: '',
    gender: '',
    hasProfile: false,
  },
  reducers: {
    setStoreFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setStoreEmail: (state, action) => {
      state.email = action.payload;
    },
    setStoreMobileNumber: (state, action) => {
      state.mobileNumber = action.payload;
    },
    setStoreDOB: (state, action) => {
      state.dateOfBirth = action.payload.toDateString();
    },
    setStoreAge: (state, action) => {
      state.age = action.payload;
    },
    setStoreGender: (state, action) => {
      state.gender = action.payload;
    },
    setStoreHasProfile: (state, action) => {
      state.hasProfile = action.payload;
    },
    setStoreResetProfile: state => {
      state.fullName = '';
      state.email = '';
      state.mobileNumber = '';
      state.dateOfBirth = '';
      state.age = '';
      state.gender = '';
    },
  },
});

export const {
  setStoreFullName,
  setStoreEmail,
  setStoreMobileNumber,
  setStoreDOB,
  setStoreAge,
  setStoreGender,
  setStoreHasProfile,
  setStoreResetProfile
} = profileSlice.actions;
export default profileSlice.reducer;
