import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import createStore from './redux/store';

import Header from './components/Header';

const store = createStore(window.__INITIAL_STATE__);

ReactDOM.render(
  <Provider store={store}>
    <Header />
  </Provider>,
  document.querySelector('#root')
);

registerServiceWorker();
