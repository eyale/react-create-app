import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route} from "react-router";
import {Link} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import createStore from "./redux/store";

import "./styles/index.scss";

import App from "./components/App";
import HowItWorks from "./components/HowItWorks";
import Calendar from "./components/Calendar";
import ContactUs from "./components/ContactUs";

import registerServiceWorker from "./registerServiceWorker";

import AppBar from "material-ui/AppBar";
import Avatar from "material-ui/Avatar";
import {indigo900, indigo500} from "material-ui/styles/colors";
import {List, ListItem} from "material-ui/List";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

const store = createStore(window.__INITIAL_STATE__);
const history = createBrowserHistory();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo900
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            style={{alignItems: "center"}}
            iconElementLeft={
              <span style={{color: "white"}}>
                <Avatar backgroundColor={indigo500}>AH</Avatar>
                <span style={{paddingLeft: "10px"}}>Anton Honcharov</span>
              </span>
            }
            iconElementRight={
              <List className="nav" style={{display: "inline-flex"}}>
                <ListItem
                  children={
                    <Link key={Math.random()} to="/">
                      Home
                    </Link>
                  }
                />
                <ListItem
                  children={
                    <Link key={Math.random()} to="/how-it-works">
                      How It Works
                    </Link>
                  }
                />
                <ListItem
                  children={
                    <Link key={Math.random()} to="/calendar">
                      Calendar
                    </Link>
                  }
                />
                <ListItem
                  children={
                    <Link key={Math.random()} to="/contact-us">
                      Contact us
                    </Link>
                  }
                />
              </List>
            }
          />
          <Route path="/" exact component={App} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/contact-us" component={ContactUs} />
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.querySelector("#root")
);
registerServiceWorker();
