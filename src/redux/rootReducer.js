import {combineReducers} from 'redux';
import {inputReducer} from './modules/check';
import {dogsReducer} from './modules/dogs';
import {themeReducer} from './modules/theme';

// import { reducer as formReducer } from 'redux-form'

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    inputReducer,
    dogsReducer,
    themeReducer
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
