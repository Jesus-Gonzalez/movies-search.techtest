import React from 'react';

import { HistoryListItem } from './__components';

import styles from './HistoryList.module.scss';

import { IProps } from './HistoryListContainer';

const HistoryList = (props: IProps) => {
  const { clear, films } = props;

  return (
    <div className={styles.wrapper}>
      <header className={styles.clearWrapper}>
        <button
          type="button"
          className={styles.clear}
          onClick={clear}
        >
          Clear
        </button>
      </header>

      {films
        .map((film: IFilmObject) => (
          <HistoryListItem
            key={film.episode_id}
            film={film}
            {...props}
          />
        ))}
    </div>
  );
};

export default HistoryList;
