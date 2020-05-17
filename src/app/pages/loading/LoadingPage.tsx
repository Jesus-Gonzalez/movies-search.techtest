import React from 'react';

import styles from './LoadingPage.module.scss';
import Spinner from 'app/components/Spinner/Spinner';

function LoadingPage() {
  return (
    <div className={styles.wrapper}>
      <div id="loading-page" className={styles.content}>
        <Spinner />
      </div>
    </div>
  );
}

export default LoadingPage;
