import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import {Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import {connect} from 'react-redux';

import '../styles/index.scss';

import App from './App';
import HowItWorks from './HowItWorks';
import Calendar from './Calendar';
import ContactUs from './ContactUs';
import Dogs from './Dogs';

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import {indigo900, indigo500} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import {Card} from 'material-ui/Card';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const history = createBrowserHistory();

class Header extends Component {
  render() {
    const {isLightTheme, handleThemeChange} = this.props;
    const theme = isLightTheme ? 'Dark theme' : 'Light theme';
    const muiTheme = isLightTheme
      ? getMuiTheme({palette: {primary1Color: indigo900}})
      : getMuiTheme(darkBaseTheme);
    return (
      <Router history={history}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <AppBar
              style={{alignItems: 'center'}}
              iconElementLeft={
                <span style={{color: 'white'}}>
                  <Avatar backgroundColor={indigo500}>AH</Avatar>
                  <span style={{paddingLeft: '10px'}}>Anton Honcharov</span>
                </span>
              }
              iconElementRight={
                <List className="nav" style={{display: 'inline-flex'}}>
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
                  <ListItem
                    children={
                      <Link key={Math.random()} to="/dogs">
                        Dogs
                      </Link>
                    }
                  />
                  <ListItem
                    children={
                      <RaisedButton
                        onClick={handleThemeChange}
                        key={Math.random()}
                        secondary={true}
                        label={theme}
                      />
                    }
                  />
                </List>
              }
            />
            <Card style={{height: '100vh'}}>
              <Route path="/" exact component={App} />
              <Route path="/how-it-works" component={HowItWorks} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/contact-us" component={ContactUs} />
              <Route path="/dogs" component={Dogs} />
            </Card>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLightTheme: state.themeReducer.isLight
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleThemeChange: () => dispatch({type: 'THEME_ON_CHANGE'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
