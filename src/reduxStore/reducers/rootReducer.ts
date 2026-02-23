import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { profileReducer } from './profileREDUX';
import counterReducer from '../../features/countSlice';
import { persistReducer } from 'redux-persist';
import { todoReducer } from './sampleAPIreducer';

const profilePersistConfig = {
  key: 'profile',
  storage: AsyncStorage,
  blacklist: ['error'],
};

export const rootReducer = combineReducers({
  counter: counterReducer,
  profile: persistReducer(profilePersistConfig, profileReducer),
  todos: todoReducer
});
