import React from 'react';

import SuggestionsBox from '../SuggestionsBox/SuggestionsBox';

import useSearchForm from './hook';
import styles from './SearchForm.module.scss';

const SearchForm = (props: any) => {
  const {
    handleChangeInputSearch,
    inputSearchValue,
    handleSubmitForm,
  } = useSearchForm({});

  const shouldDisplaySuggestions = false;

  return (
    <form
      className={styles.wrapper}
      onSubmit={handleSubmitForm}
    >
      <div className={styles.inputButton}>
        <input
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

      {shouldDisplaySuggestions && <SuggestionsBox />}
    </form>
  );
}

export default SearchForm;
