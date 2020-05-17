import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getFilm } from 'core/store/actions/films';
import { addToHistory } from 'core/store/actions/history';

import { LoadingPage } from 'app/pages/loading';

import { Layout } from './components';

import useFilmPage from './FilmPage.hook';

interface IProps {
  addToHistory: (film: IFilmObject) => void;
  film: IFilmObject;
  getFilm: (filmId: string) => void;
  history: IFilmObject[];
  loading: boolean;
}

export function FilmPage(props: IProps) {
  useFilmPage(props);

  if (props.loading) {
    return <LoadingPage />;
  }

  return (
    <Layout
      {...props}
    />
  );
}

const mapStateToProps = (state: any) => ({
  film: state.films.film,
  loading: state.films.loading,
  history: state.history.items,
});

const mapDispatchToProps = (dispatch: any) => ({
  addToHistory: compose(dispatch, addToHistory),
  getFilm: compose(dispatch, getFilm),
});

const FilmPageConnected = connect(mapStateToProps, mapDispatchToProps)(FilmPage);

export default FilmPageConnected;
