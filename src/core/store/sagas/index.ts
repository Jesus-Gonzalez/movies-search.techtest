import { all } from 'redux-saga/effects';

import watchFetchCharacters from './fetchCharacters.saga';
import watchFetchFilms from './fetchFilms.saga';
import watchGetFilm from './getFilm.saga';

export default function* RootSaga() {
  yield all([
    watchFetchCharacters(),
    watchFetchFilms(),
    watchGetFilm(),
  ]);
}
