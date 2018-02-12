import React, {Component} from 'react';
import Popup from './Popup';
import {connect} from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showPopup: false};

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow(e) {
    e.preventDefault();
    this.setState({showPopup: true});
  }
  handleHide(e) {
    e.preventDefault();
    this.setState({showPopup: false});
  }

  showPopup() {
    return this.state.showPopup ? (
      <Popup>
        <p className={this.props.className || 'title'}>Hey from Portal</p>
        <RaisedButton
          onClick={this.handleHide}
          label="Hide Portal"
          primary={true}
        />
      </Popup>
    ) : null;
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          The main page.
          <br />
          This is portal button
        </p>
        <RaisedButton
          onClick={this.handleShow}
          label="Show Portal"
          primary={true}
        />
        <div id="popup-container">{this.showPopup()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    // config: state.config,
    // menu: state.menu
  };
};

export default connect(mapStateToProps, {})(App);
