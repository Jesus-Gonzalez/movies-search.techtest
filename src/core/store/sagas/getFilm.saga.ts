import { call, put, takeLatest } from 'redux-saga/effects';

import * as Api from 'app/api'

interface IAction {
  type: string;
  filmId: string;
}

function* getFilm(action: IAction) {
  try {
    const film = yield call(Api.getFilm, action.filmId);
    yield put({ type: 'GET_FILM_SUCCESS', film });
  } catch {
    yield put({ type: 'GET_FILM_ERROR' });
  }
}

export default function* FilmsSaga() {
  yield takeLatest<IAction>('GET_FILM', getFilm);
}
