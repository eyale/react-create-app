import {
  API_DOGS_LIST_REQUEST,
  API_DOGS_LIST_SUCCESS,
  API_DOGS_RANDOM_REQUEST,
  API_DOGS_RANDOM_SUCCESS,
  API_DOGS_FAILURE,
  API_DOGS_SELECT_BREED,
  API_DOGS_SELECTED_BREED_FETCHED
} from '../constants';

const initialState = {
  fetching: false,
  dog: null,
  error: null,
  dogsList: [],
  selectedBreed: '',
  selectedBreedImage: ''
};

export const dogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_DOGS_LIST_REQUEST:
      return {...state, fetching: true, error: null};
    case API_DOGS_RANDOM_REQUEST:
      return {...state, fetching: true, error: null};
    case API_DOGS_LIST_SUCCESS:
      return {...state, fetching: false, dogsList: action.dogsList};
    case API_DOGS_RANDOM_SUCCESS:
      return {...state, fetching: false, dog: action.dog};
    case API_DOGS_SELECT_BREED:
      return {...state, selectedBreed: action.dog};
    case API_DOGS_SELECTED_BREED_FETCHED:
      return {...state, selectedBreedImage: action.breedImageData};
    case API_DOGS_FAILURE:
      return {...state, fetching: false, dog: null, error: action.error};
    default:
      return state;
  }
};
