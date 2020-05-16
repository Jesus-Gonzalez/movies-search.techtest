import { escapeRegex } from "core/utils";

export interface IFilmsReducerState {
  error: boolean;
  film: IFilm;
  films: IFilm[];
  filteredFilms: IFilm[];
  loading: string | boolean;
  shouldDisplaySuggestions: boolean;
  submitted: boolean;
}

const initialState: IFilmsReducerState = {
  error: false,
  film: {} as IFilm,
  films: [],
  filteredFilms: [],
  loading: true,
  shouldDisplaySuggestions: false,
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

      const filteredFilms = state.films
        .filter(film => regexp.test(film.title.toLowerCase()));

      return Object.assign(
        {},
        state,
        {
          submitted: false,
          filteredFilms,
          shouldDisplaySuggestions: !!filteredFilms.length,
        }
      );

    case 'TOGGLE_SUGGESTIONS':
        return Object.assign(
          {},
          state,
          { shouldDisplaySuggestions: !state.shouldDisplaySuggestions }
        );

    case 'SUBMIT_FILMS':
      return Object.assign(
        {},
        state,
        {
          submitted: true,
          shouldDisplaySuggestions: false,
        });

    case 'GET_FILM':
      return Object.assign(
        {},
        state,
        {
          loading: true,
          error: false,
          film: {},
        });

    case 'GET_FILM_SUCCESS':
      return Object.assign(
        {},
        state,
        {
          loading: false,
          film: action.film,
        });

    case 'GET_FILM_ERROR':
      return Object.assign(
        {},
        state,
        {
          loading: false,
          error: true,
        });

    case 'SET_LOADING':
      return Object.assign(
        {},
        state,
        {
          loading: action.loading,
        });

    default:
      return state;
  }
}
