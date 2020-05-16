import React from 'react';

import {
  SearchForm,
  SearchResults,
} from './__components';

import styles from './SearchForm.module.scss';

export default function FilmsSearch () {
  return (
    <section className={styles.wrapper}>
      <SearchForm />
      <SearchResults />
    </section>
  );
};

