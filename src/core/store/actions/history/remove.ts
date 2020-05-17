import * as ActionTypes from 'core/store/actionTypes';

export const remove = (film: IFilmObject) => ({
  type: ActionTypes.History.Remove,
  film,
});
