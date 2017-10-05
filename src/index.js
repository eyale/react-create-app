import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router'
import createStore from './redux/store';
import './styles/index.scss';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import createBrowserHistory from 'history/createBrowserHistory'
const store = createStore(window.__INITIAL_STATE__)
const history = createBrowserHistory()
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  , document.querySelector('#root'));
  registerServiceWorker();
  