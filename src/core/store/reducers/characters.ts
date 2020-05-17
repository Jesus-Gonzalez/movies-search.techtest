export interface IHistoryReducerState {
  error: boolean;
  items: ICharacter[];
  loading: boolean;
}

const initialState: IHistoryReducerState = {
  loading: false,
  items: [],
  error: false
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_CHARACTERS':
      return Object.assign(
        {},
        state,
        {
          error: false,
          loading: true,
          items: []
        }
      );

    case 'FETCH_CHARACTERS_SUCCESS':
      return Object.assign(
        {},
        state,
        {
          loading: false,
          items: action.characters.results
        }
      );

    case 'FETCH_CHARACTERS_ERROR':
      return Object.assign(
        {},
        state,
        {
          error: true,
          loading: false,
        }
      );

    default:
      return state;
  }
}
