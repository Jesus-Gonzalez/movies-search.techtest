import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { fetchFilms, reset } from 'core/store/actions/films';

import { LoadingPage } from 'app/pages/loading';
import { Layout } from './components'

import useHomePage from './HomePage.hook';

interface IProps {
  films: IFilm[];
  fetchFilms: () => void;
  loading: boolean;
  reset: () => void;
}

export function HomePage(props: IProps) {
  useHomePage(props);

  if (props.loading) {
    return <LoadingPage />;
  }

  return (
    <Layout />
  );
}

const mapStateToProps = (state: any) => ({
  films: state.films.films,
  loading: state.films.loading,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchFilms: compose(dispatch, fetchFilms),
  reset: compose(dispatch, reset),
})

const HomePageConnected = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnected;
