import { all } from 'redux-saga/effects';

import watchFetchFilms from './fetchFilms.saga';
import watchGetFilm from './getFilm.saga';

export default function* RootSaga() {
  yield all([
    watchFetchFilms(),
    watchGetFilm(),
  ]);
}
