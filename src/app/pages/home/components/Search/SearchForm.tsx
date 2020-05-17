import React from 'react';
import { Link } from 'react-router-dom';

import { SuggestionsContainer } from '../__components';

import styles from './SearchForm.module.scss';

import { IProps } from './SearchFormContainer';
import { IHook } from './SearchForm.hook';

type Props = IHook & IProps;

const SearchForm = (props: Props) => {
  const {
    handleChangeInputSearch,
    handleSubmitForm,
    inputSearchValue,
    inputRef,
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

            <Link
              className={styles.linkButton}
              to="/history"
            >
              History
            </Link>
          </div>

          {shouldDisplaySuggestions && (
            <SuggestionsContainer
              filteredFilms={filteredFilms}
              handleSubmit={handleSubmitForm}
            />
        )}
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
