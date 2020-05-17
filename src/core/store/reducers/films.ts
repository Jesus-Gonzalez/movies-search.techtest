import * as ActionTypes from 'core/store/actionTypes';

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
    case ActionTypes.Films.Fetch:
      return Object.assign(
        {},
        state,
        { loading: true, filteredFilms: [] }
      );

    case ActionTypes.Films.FetchSuccess:
      return Object.assign(
        {},
        state,
        { loading: false, films: action.films.results }
      );

    case ActionTypes.Films.FetchError:
      return Object.assign(
        {},
        state,
        { loading: false, error: true }
      );

    case ActionTypes.Films.FilterFilms:
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

    case ActionTypes.Films.ToggleSuggestions:
        return Object.assign(
          {},
          state,
          { shouldDisplaySuggestions: !state.shouldDisplaySuggestions }
        );

    case ActionTypes.Films.Submit:
      return Object.assign(
        {},
        state,
        {
          submitted: true,
          shouldDisplaySuggestions: false,
        });

    case ActionTypes.Films.GetFilm:
      return Object.assign(
        {},
        state,
        {
          loading: true,
          error: false,
          film: {},
        });

    case ActionTypes.Films.GetFilmSuccess:
      return Object.assign(
        {},
        state,
        {
          loading: false,
          film: action.film,
        });

    case ActionTypes.Films.GetFilmError:
      return Object.assign(
        {},
        state,
        {
          loading: false,
          error: true,
        });

    case ActionTypes.Films.SetLoading:
      return Object.assign(
        {},
        state,
        {
          loading: action.loading,
        });

    case ActionTypes.Films.Reset:
      return Object.assign(
        {},
        state,
        initialState
      )

    default:
      return state;
  }
}
