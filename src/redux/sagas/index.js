import {takeLatest, call, put} from 'redux-saga/effects';
import axios from 'axios';

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

    yield put({type: 'API_CALL_SUCCESS', dog});
  } catch (error) {
    yield put({type: 'API_CALL_FAILURE', error});
  }
}

export function* watcherSaga() {
  yield takeLatest('API_CALL_REQUEST', workerSaga);
}
