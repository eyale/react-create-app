import {takeLatest, call, put, select} from 'redux-saga/effects';
import axios from 'axios';
import {
  API_DOGS_LIST_REQUEST,
  API_DOGS_LIST_SUCCESS,
  API_DOGS_RANDOM_REQUEST,
  API_DOGS_RANDOM_SUCCESS,
  API_DOGS_FAILURE,
  API_DOGS_SELECT_BREED,
  API_DOGS_SELECTED_BREED_FETCHED
} from '../constants';

function fetchDog() {
  return axios({
    method: 'get',
    url: 'https://dog.ceo/api/breeds/image/random'
  });
}

function* workerSaga() {
  try {
    const resp = yield call(fetchDog);
    const dog = resp.data.message;

    yield put({type: API_DOGS_RANDOM_SUCCESS, dog});
  } catch (error) {
    yield put({type: API_DOGS_FAILURE, error});
  }
}

function fetchDogBreedList() {
  return axios({
    method: 'get',
    url: 'https://dog.ceo/api/breeds/list'
  });
}

function* dogsListSaga() {
  try {
    const respDogList = yield call(fetchDogBreedList);
    const dogsList = respDogList.data;

    yield put({type: API_DOGS_LIST_SUCCESS, dogsList});
  } catch (error) {
    yield put({type: API_DOGS_FAILURE});
  }
}

function* getDogsByBreed() {
  const state = state => state;
  const breed = yield select(state);
  const breedImage = yield call(() => {
    return axios({
      method: 'get',
      url: `https://dog.ceo/api/breed/${
        breed.dogsReducer.selectedBreed
      }/images/random`
    });
  });

  const breedImageData = breedImage.data.message;

  yield put({type: API_DOGS_SELECTED_BREED_FETCHED, breedImageData});
  try {
  } catch (error) {
    yield put({type: API_DOGS_FAILURE});
  }
}

export function* watcherSaga() {
  yield takeLatest(API_DOGS_RANDOM_REQUEST, workerSaga);
  yield takeLatest(API_DOGS_LIST_REQUEST, dogsListSaga);
  yield takeLatest(API_DOGS_SELECT_BREED, getDogsByBreed);
}

/**
 * РЕЗУЛЬТАТ ВЫРАЖЕНИЯ СПРАВА ОТ yield - возвращается после вычесления
 *
 * takeEvery - позволяет диспатчить несколько экшенов
 * takeLatest - запускаем последний диспатч - предидущая задача отменяется
 *
 * call - возвращает простой объект
 * cps - обработка функций в стиле cps
 * */
