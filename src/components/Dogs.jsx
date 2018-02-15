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
    },
    breed: {
      width: '500px',
      display: 'block',
      margin: '0 auto',
      borderRadius: '3%',
      boxShadow: 'rgba(0, 0, 0, 0.3) 0 5px 17px 0'
    }
  };

  componentWillMount() {
    this.props.dogsList.length === 0 && this.props.onListDogsRequest();
  }

  handleChange = (event, index, value) => {
    const {onSelectBreed, dogsList} = this.props;
    onSelectBreed(dogsList.filter((breed, idx) => idx === value)[0]);
  };

  returnSelectItems = () => {
    const {dogsList, selectedBreed, selectedBreedImage} = this.props;
    if (dogsList.length === 0) return null;

    const breedsValue =
      dogsList.indexOf(selectedBreed) === -1
        ? 0
        : dogsList.indexOf(selectedBreed);

    return (
      <div>
        <SelectField
          floatingLabelText="Select Breed"
          onChange={this.handleChange}
          value={breedsValue}
        >
          {dogsList.map((breed, idx) => {
            return <MenuItem key={idx} value={idx} primaryText={breed} />;
          })}
        </SelectField>
        <img src={selectedBreedImage || logo} style={this.style.breed} alt="" />
      </div>
    );
  };

  render() {
    const {fetching, dog, error, onRequestDog} = this.props;

    return (
      <div className="App grid">
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
      </div>
    );
  }
}

const mapStateToProps = ({dogsReducer}) => {
  return {
    fetching: dogsReducer.fetching,
    dog: dogsReducer.dog,
    error: dogsReducer.error,
    dogsList: dogsReducer.dogsList.message || [],
    selectedBreed: dogsReducer.selectedBreed,
    selectedBreedImage: dogsReducer.selectedBreedImage
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
