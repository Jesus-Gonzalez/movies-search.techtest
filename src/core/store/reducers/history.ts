export interface IHistoryReducerState {
  items: IFilm[];
}

const history = JSON.parse(localStorage.getItem('history.items') || '[]');
const initialState: IHistoryReducerState = {
  items: history,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'HISTORY_ADD':
      return Object.assign(
        {},
        state,
        { items: state.items.concat(action.film) }
      );

    case 'HISTORY_REMOVE':
      const index = state.items.findIndex(film => film.url === action.film.url);
      const nextItems = Object.assign({}, state.items);
      nextItems.splice(index, 1);

      return Object.assign(
        {},
        state,
        { items: nextItems }
      );

    case 'HISTORY_CLEAR':
      return Object.assign(
        {},
        state,
        { items: [] }
      );

    default:
      return state;
  }
}
