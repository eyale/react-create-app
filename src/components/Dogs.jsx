import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from '../assets/logo.svg';
import RaisedButton from 'material-ui/RaisedButton';

class Dogs extends Component {
  style = {
    logo: {
      width: '200px',
      borderRadius: '3%'
    }
  };

  render() {
    const {fetching, dog, error, onRequestDog} = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img
            src={dog || logo}
            className="App-logo"
            alt="logo"
            style={this.style.logo}
          />
          <h1 className="App-title">Welcome to Dog Saga</h1>
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <RaisedButton label="Fetching..." />
        ) : (
          <RaisedButton onClick={onRequestDog} label="Request a Dog" />
        )}

        {error && <p style={{color: 'red'}}>Uh oh - something went wrong!</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.dogsReducer.fetching,
    dog: state.dogsReducer.dog,
    error: state.dogsReducer.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({type: 'API_CALL_REQUEST'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dogs);
