import {combineReducers} from 'redux';
import {inputReducer} from './modules/check';
import {dogsReducer} from './modules/dogs';
// import { reducer as formReducer } from 'redux-form'

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    inputReducer,
    dogsReducer
    // form: formReducer,
    // ...asyncReducers
  });
};

export const injectReducer = (store, {key, reducer}) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
