import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchMovies as fetchMoviesAction } from 'core/store/actions/movies';

const DetailPage = ({ fetchMovies, title }: any) => {
  fetchMovies();

  debugger;

  return (
    <>
      <p>detail {title}</p>
      <Link to="/">Back Home</Link>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  title: state.movies.title,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchMovies: () => dispatch(fetchMoviesAction())
});

const DetailPageConnected =
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DetailPage);

export default DetailPageConnected;
