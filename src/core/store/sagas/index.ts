import moviesSaga from './movies';
// import historySaga from './history';

export default function* RootSaga() {
  yield moviesSaga();
  // historySaga();
}
