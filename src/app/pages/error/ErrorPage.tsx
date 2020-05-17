import React from 'react';

import styles from './ErrorPage.module.scss';

import { Link } from 'react-router-dom';

function LoadingPage() {
  return (
    <div className={styles.wrapper}>
      <div id="loading-page" className={styles.content}>
        <h1>Error</h1>
        <p>A problem occured while fetching the data</p>
        <p>
          <Link
            className={styles.link}
            to="/search"
          >
            Try again later
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoadingPage;
