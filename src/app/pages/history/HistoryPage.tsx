import React from 'react';
import HistoryListContainer from './components/HistoryListContainer';

import styles from './HistoryPage.module.scss';
import { Header } from './components';

interface IProps {
  history: IFilm[];
}

const HistoryPage = (props: IProps) => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <Header />
      <h1>History</h1>
      <HistoryListContainer
        handleGotoDetail={() => void 0}
      />
    </div>
  </div>
);

export default HistoryPage;
