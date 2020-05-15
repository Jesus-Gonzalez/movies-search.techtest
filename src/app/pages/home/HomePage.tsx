import React from 'react';

import { Link } from 'react-router-dom';

import { SearchForm } from './components'

import styles from './HomePage.module.scss';

export default function HomePage() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.content}>
          <nav>
            <Link
              className={styles.link}
              to="/history"
            >
              History
            </Link>
          </nav>
          <h1>Star Wars Wiki</h1>
          <SearchForm />
          {/* <Carousel /> */}
        </div>
      </div>
  );
}
