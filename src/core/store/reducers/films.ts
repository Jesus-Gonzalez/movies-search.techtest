import { escapeRegex } from "core/utils";

export interface IFilmsReducerState {
  error: boolean;
  films: IFilm[];
  filteredFilms: IFilm[];
  loading: string | boolean;
  submitted: boolean;
}

const initialState: IFilmsReducerState = {
  error: false,
  films: [],
  filteredFilms: [],
  loading: false,
  submitted: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_FILMS':
      return Object.assign(
        {},
        state,
        { loading: true, filteredFilms: [] }
      );

    case 'FETCH_FILMS_SUCCESS':
      return Object.assign(
        {},
        state,
        { loading: false, films: action.films.results }
      );

    case 'FETCH_FILMS_ERROR':
      return Object.assign(
        {},
        state,
        { loading: false, error: true }
      );

    case 'FILTER_FILMS':
      const regexp = new RegExp(escapeRegex(action.term.toLowerCase()));

      return Object.assign(
        {},
        state,
        {
          submitted: false,
          filteredFilms: state.films
            .filter(film => regexp.test(film.title.toLowerCase())),
        }
      );

    case 'SUBMIT_FILMS':
      return Object.assign({}, state, { submitted: true });

    default:
      return state;
  }
}
