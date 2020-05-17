import { call, put, takeLatest } from 'redux-saga/effects';

import * as Api from 'app/api'

export function* fetchFilms() {
  try {
    const films = yield call(Api.fetchFilms);
    yield put({ type: 'FETCH_FILMS_SUCCESS', films });
  } catch {
    yield put({ type: 'FETCH_FILMS_ERROR' });
  }
}

export default function* FetchFilmsSaga() {
  yield takeLatest('FETCH_FILMS', fetchFilms);
}
