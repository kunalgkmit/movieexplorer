import * as types from '../actionTypes/profileActions';

export const logger = store => next => action => {
  console.log('DISPATCH MIDDLEWARE', action.type);
  //   if (action.type === 'SET_FULL_NAME') {
  //     return ({
  //       payload: 'Himanshu',
  //       type: 'SET_FULL_NAME',
  //     });
  //   }
  if (action.type === types.SET_FULL_NAME) {
    //   const result = next({
    //         type: 'SET_FULL_NAME',
    //         payload: "XYZ NAME",
    //       });
    // console.log("GET STATE>>>>", store.getState())
    setTimeout(() => {
      store.dispatch({
        type: types.SET_ERROR,
        payload: 'पूरा नाम ब्लॉक कर दिया गया है',
      });
    }, 2000);
    // store.dispatch({ type: types.SET_ERROR, payload: 'पूरा नाम ब्लॉक कर दिया गया है' });
    return;
  }

  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  console.log('GET STATE>>>>', store.getState());

  const result = next(action);
  console.log('New state:', store.getState());
  return result;
};
