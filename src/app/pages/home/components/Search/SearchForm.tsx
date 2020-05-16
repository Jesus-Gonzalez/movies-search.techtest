import React from 'react';
import { connect } from 'react-redux';

import { filterFilms, handleSubmit } from 'core/store/actions/films';

import Suggestions from '../Suggestions/Suggestions';

import useSearchForm from './SearchForm.hook';
import styles from './SearchForm.module.scss';
import { compose } from 'redux';

const SearchForm = (props: any) => {
  const {
    handleChangeInputSearch,
    handleSubmitForm,
    inputSearchValue,
    inputRef,
  } = useSearchForm(props);

  const {
    filteredFilms,
    shouldDisplaySuggestions,
  } = props;

  return (
    <section className={styles.wrapper}>
      <form
        className={styles.form}
        onSubmit={handleSubmitForm}
      >
        <div className={styles.suggestionsWrapper}>
          <div className={styles.inputButton}>
            <input
              ref={inputRef}
              className={styles.input}
              type="text"
              placeholder="Search movie"
              value={inputSearchValue}
              onChange={handleChangeInputSearch}
            />

            <button
              className={styles.button}
              type="submit"
            >
              Search
            </button>
          </div>

          {shouldDisplaySuggestions && (
          <Suggestions filteredFilms={filteredFilms} />
        )}
        </div>
      </form>
    </section>
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

const SearchFormConnected = connect(mapStateToProps, mapDispatchToProps)(SearchForm);

export default SearchFormConnected;
