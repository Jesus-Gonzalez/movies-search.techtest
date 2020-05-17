import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getFilm } from 'core/store/actions/films';
import { LoadingPage } from 'app/pages/loading';

import { Layout } from './components';

import useFilmPage from './FilmPage.hook';

interface IProps {
  film: IFilmObject;
  getFilm: (filmId: string) => void;
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
});

const mapDispatchToProps = (dispatch: any) => ({
  getFilm: compose(dispatch, getFilm),
});

const FilmPageConnected = connect(mapStateToProps, mapDispatchToProps)(FilmPage);

export default FilmPageConnected;
