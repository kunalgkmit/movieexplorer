// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/countSlice';
// import {profileReducer} from '../features/profileREDUX';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     profile: profileReducer,
//   },
// });

import { combineReducers, applyMiddleware, createStore } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import counterReducer from '../features/countSlice';
import { profileReducer } from './reducers/profileREDUX';
import { logger } from './middleware/logger';
import { rootReducer } from './reducers/rootReducer';
import { thunk } from 'redux-thunk';

const persistConfig = {
  key: 'rootStorage',
  storage: AsyncStorage,
  blacklist: ['profile'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, logger),
);

export const persistor = persistStore(store);
