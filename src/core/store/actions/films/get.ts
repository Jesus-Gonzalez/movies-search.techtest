import * as ActionTypes from 'core/store/actionTypes';

export const getFilm = (filmId: string) => ({
  type: ActionTypes.Films.GetFilm,
  filmId,
});
