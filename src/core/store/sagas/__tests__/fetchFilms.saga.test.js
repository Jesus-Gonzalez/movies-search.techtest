// every action type has the same pattern
import { call, put } from 'redux-saga/effects';

import * as Api from 'app/api';
import { fetchFilms } from '../fetchFilms.saga.ts'

it('creates the action', () => {
  const gen = fetchFilms();

  expect(gen.next().value)
    .toEqual(call(Api.fetchFilms));

  expect(gen.next().value)
    .toEqual(put({ type: 'FETCH_FILMS_SUCCESS', films: undefined }));
});
