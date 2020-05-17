import * as ActionTypes from 'core/store/actionTypes';

export const filterFilms = (term: string) => ({
  type: ActionTypes.Films.FilterFilms,
  term,
})
