import { call, put, takeLatest } from 'redux-saga/effects';

import * as Api from 'app/api'

function* fetchCharacters() {
  try {
    const characters = yield call(Api.fetchCharacters);
    yield put({ type: 'FETCH_CHARACTERS_SUCCESS', characters });
  } catch {
    yield put({ type: 'FETCH_CHARACTERS_ERROR' });
  }
}

export default function* FetchCharactersSaga() {
  yield takeLatest('FETCH_CHARACTERS', fetchCharacters);
}
