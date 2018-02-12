import {applyMiddleware, compose, createStore as createReduxStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import makeRootReducer from './rootReducer';

import {watcherSaga} from './sagas';
const sagaMiddleware = createSagaMiddleware();

const createStore = (initialState = {}) => {
  const middleware = [sagaMiddleware];
  const enhancers = [];
  let composeEnhancers = compose;

  if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  );
  sagaMiddleware.run(watcherSaga);
  store.asyncReducers = {};

  return store;
};

export default createStore;
