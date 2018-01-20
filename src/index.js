import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router'
import createStore from './redux/store';
import './styles/index.scss';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import createBrowserHistory from 'history/createBrowserHistory'
import {indigo900} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const store = createStore(window.__INITIAL_STATE__)
const history = createBrowserHistory()
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo900,
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
    </Router>
  </Provider>
  , document.querySelector('#root'));
  registerServiceWorker();
  