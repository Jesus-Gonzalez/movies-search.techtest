import * as ActionTypes from 'core/store/actionTypes';

export const addToHistory = (film: IFilmObject) => ({
  type: ActionTypes.History.Add,
  film,
});
