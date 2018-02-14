import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from '../assets/logo.svg';
import RaisedButton from 'material-ui/RaisedButton';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Dogs extends Component {
  style = {
    logo: {
      width: '200px',
      borderRadius: '3%'
    }
  };

  componentWillMount() {
    this.props.dogsList.length === 0 && this.props.onListDogsRequest();
  }

  handleChange = (event, index, value) => {
    this.props.onSelectBreed(value);
  };

  returnSelectItems = () => {
    if (this.props.dogsList.length === 0) return null;
    return (
      <SelectField
        floatingLabelText="Select Breed"
        onChange={this.handleChange}
        value={this.props.selectedBreed}
      >
        {this.props.dogsList.message.map((breed, idx) => {
          return <MenuItem key={idx} value={idx} primaryText={breed} />;
        })}
      </SelectField>
    );
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

        <br />
        {this.returnSelectItems()}
        <img src={this.props.dogsList[this.props.selectedBreed]} alt="" />
      </div>
    );
  }
}

const mapStateToProps = ({dogsReducer}) => {
  return {
    fetching: dogsReducer.fetching,
    dog: dogsReducer.dog,
    error: dogsReducer.error,
    dogsList: dogsReducer.dogsList,
    selectedBreed: dogsReducer.selectedBreed
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({type: 'API_DOGS_RANDOM_REQUEST'}),
    onListDogsRequest: () => dispatch({type: 'API_DOGS_LIST_REQUEST'}),
    onSelectBreed: dog => dispatch({type: 'API_DOGS_SELECT_BREED', dog})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dogs);
