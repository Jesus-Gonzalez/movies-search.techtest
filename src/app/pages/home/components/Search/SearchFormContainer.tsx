import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { filterFilms, handleSubmit } from 'core/store/actions/films';

import { SearchForm } from './__components';

import useSearchForm from './SearchForm.hook';

export interface IProps {
  films: IFilm[];
  filteredFilms: IFilm[];
  shouldDisplaySuggestions: boolean;
  filterFilms: (term: string) => void;
  handleSubmit: () => void;
}

const SearchFormContainer = (props: IProps) => {
  const hook = useSearchForm(props);

  return (
    <SearchForm
      {...props}
      {...hook}
    />
  );
};

const mapStateToProps = (state: any) => ({
  films: state.films.films,
  filteredFilms: state.films.filteredFilms,
  shouldDisplaySuggestions: state.films.shouldDisplaySuggestions,
});

const mapDispatchToProps = (dispatch: any) => ({
  filterFilms: compose(dispatch, filterFilms),
  handleSubmit: compose(dispatch, handleSubmit),
});

const SearchFormContainerConnected = connect(mapStateToProps, mapDispatchToProps)(SearchFormContainer);

export default SearchFormContainerConnected;
