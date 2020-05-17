import * as ActionTypes from 'core/store/actionTypes';

export interface IHistoryReducerState {
  items: IFilmObject[];
}

const history = JSON.parse(localStorage.getItem('history.items') || '[]');
const initialState: IHistoryReducerState = {
  items: history,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.History.Add:
      return Object.assign(
        {},
        state,
        { items: state.items.concat(action.film) }
      );

    case ActionTypes.History.Remove:
      const index = state.items.findIndex(film => film.url === action.film.url);
      const nextItems = Object.assign([], state.items);
      nextItems.splice(index, 1);

      return Object.assign(
        {},
        state,
        { items: nextItems }
      );

    case ActionTypes.History.Clear:
      return Object.assign(
        {},
        state,
        { items: [] }
      );

    default:
      return state;
  }
}
