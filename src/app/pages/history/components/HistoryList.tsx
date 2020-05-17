import React from 'react';

import { HistoryListItem } from './__components';

import styles from './HistoryList.module.scss';

import { IProps } from './HistoryListContainer';

const HistoryList = (props: IProps) => {
  const { films } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.clear}>
        <button className={styles.clear}>Clear</button>
      </div>

      {films
        .map((film: IFilm) => (
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
