import * as ActionTypes from 'core/store/actionTypes';

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
    case ActionTypes.Characters.Fetch:
      return Object.assign(
        {},
        state,
        {
          error: false,
          loading: true,
          items: []
        }
      );

    case ActionTypes.Characters.FetchSuccess:
      return Object.assign(
        {},
        state,
        {
          loading: false,
          items: action.characters.results
        }
      );

      case ActionTypes.Characters.FetchError:
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
