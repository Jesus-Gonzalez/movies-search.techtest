import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { LoadingPage } from 'app/pages/loading';
import { Search } from './components'

import styles from './HomePage.module.scss';
import useHomePage from './HomePage.hook';
import { fetchFilms } from 'core/store/actions/films';

interface IProps {
  films: IFilm[];
  fetchFilms: () => void;
  loading: boolean;
}

export function HomePage(props: IProps) {
  useHomePage(props);

  if (props.loading) {
    return <LoadingPage />;
  }

  return (
    <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1>Star Wars Wiki</h1>
          <Search />
        </div>
      </div>
  );
}

const mapStateToProps = (state: any) => ({
  films: state.films.films,
  loading: state.films.loading,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchFilms: compose(dispatch, fetchFilms),
})

const HomePageConnected = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnected;
