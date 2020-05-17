import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { setLoading } from 'core/store/actions/films';

import { SearchResults } from './__components';

import useSearchResults from './SearchResults.hook';

export interface IProps {
  filteredFilms: IFilm[];
  setLoading: (loading: boolean) => void;
  submitted: boolean;
}

const SearchResultsContainer = (props: IProps) => {
  const hook = useSearchResults(props);

  const { filteredFilms, submitted } = props;

  if (!submitted) return null;

  if (!filteredFilms || !filteredFilms.length) {
    return <p>No results</p>;
  }

  return (
    <SearchResults
      {...props}
      {...hook}
    />
  );
};

const mapStateToProps = (state: any) => ({
  filteredFilms: state.films.filteredFilms,
  submitted: state.films.submitted,
});

const mapDispatchToProps = (dispatch: any) => ({
  setLoading: compose(dispatch, setLoading),
});

const SearchResultsContainerConnected = connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer);

export default SearchResultsContainerConnected;
