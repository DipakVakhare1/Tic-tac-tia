// src/store/sagas.js
import { takeEvery } from 'redux-saga/effects';
import { actionTypes } from './action';

function* makeMoveSaga(action) {
  // Handle side effects if needed (e.g., logging)
}

export default function* rootSaga() {
  yield takeEvery(actionTypes.MAKE_MOVE, makeMoveSaga);
}
