import React from 'react';

import {
  SearchFormContainer,
  SearchResultsContainer,
} from './__components';

import styles from './SearchForm.module.scss';

export default function Search () {
  return (
    <section className={styles.wrapper}>
      <SearchFormContainer />
      <SearchResultsContainer />
    </section>
  );
};

