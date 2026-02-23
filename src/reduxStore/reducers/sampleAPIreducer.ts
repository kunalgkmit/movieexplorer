import { store } from 'reduxStore/store';
import * as types from '../actionTypes/profileActions';

interface TodoState {
  todos: Movie[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoReducer = (state = initialState, action: any) => {
  console.log('TODO in ACTION>>>', action);
  switch (action.type) {
    case types.SET_TODOS:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};
