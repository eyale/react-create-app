import React, { Component } from 'react'
import Popup from './Popup'
import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import {indigo900, indigo500} from 'material-ui/styles/colors';

import logo from '../assets/logo.svg'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {showPopup: false}

    this.handleShow = this.handleShow.bind(this)
    this.handleHide = this.handleHide.bind(this)
  }

  handleShow(e) {
    e.preventDefault()
    this.setState({ showPopup:true })
  }
  handleHide(e) {
    e.preventDefault()
    this.setState({ showPopup:false })
  }

  showPopup() {
    return (
      this.state.showPopup
        ? <Popup>
            <span className={this.props.className || 'title'}>Hey from Popup</span>
            <button onClick={this.handleHide}>Hide</button>
          </Popup>
        : null
    )
  }
  handleClick() {
    alert('onClick triggered on the title component');
  }
  
  styles = {
    title: {
      cursor: 'pointer',
    },
  };

  render() {

    return (
      <div className="App">
      <AppBar
        onTitleClick={this.handleClick}
        iconElementLeft={
          <span style={{color: 'white'}}>
            <Avatar backgroundColor={indigo500}>JS</Avatar>
            <span style={{ paddingLeft: '10px'}}>John Snow</span>
          </span>}
        iconElementRight={<FlatButton label="Save" />}
      />
          <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleShow}>Show Popup</button>
        <div id='popup-container'>{this.showPopup()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    // config: state.config,
    // menu: state.menu
}}

export default connect(mapStateToProps, {})(App)
