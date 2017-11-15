import React, { Component } from 'react'
import Popup from './Popup'
import { connect } from 'react-redux'

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

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
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
