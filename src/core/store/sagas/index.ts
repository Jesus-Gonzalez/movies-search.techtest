import moviesSaga from './films';

export default function* RootSaga() {
  yield moviesSaga();
}
