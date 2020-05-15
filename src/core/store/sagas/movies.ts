import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

const Mock = {
  fn: (text: string) => new Promise(resolve => resolve(text)),
}

function* fetchMovies(action: any) {
  try {
    const movie = yield call(Mock.fn, action.movie);
    yield put({ type: 'FETCH_MOVIES_SUCCESS', movie });
  } catch {
    yield put({ type: 'FETCH_MOVIES_ERROR' });
  }
}

function* getMovie() {
  try {
    const movie = yield call(Mock.fn, 'Harry');
    yield put({ type: 'GET_MOVIE_SUCCESS', movie });
  } catch {
    yield put({ type: 'GET_MOVIE_ERROR' });
  }
}

export default function* moviesSaga() {
  yield takeLatest('FETCH_MOVIES', fetchMovies);
  yield takeEvery('GET_MOVIE', getMovie);
}
