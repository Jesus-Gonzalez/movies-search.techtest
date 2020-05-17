import React from 'react';

import styles from './HistoryListItem.module.scss';

interface IProps {
  film: IFilm;
  handleGotoDetail: (film: IFilm) => void;
  remove: (film: IFilm) => void;
}

const HistoryListItem = (props: IProps) => {
  const {
    film,
    handleGotoDetail,
    remove
  } = props;

  const description = film.opening_crawl
    .replace(/[\r\n]/g, '')
    .replace(/[.]/g, '. ')
    .substr(0, 123)
    .concat('...');

  return (
    <div
      className={styles.wrapper}
      onClick={() => handleGotoDetail(film)}
    >
      <div className={styles.remove}>
        <button onClick={() => remove(film)}>remove</button>
      </div>
      <img
        className={styles.image}
        src="https://source.unsplash.com/random/150x150"
        alt={`${film.title} logo`}
      />

      <div className={styles.details}>
        <header className={styles.header}>
          <h3 className={styles.title}>{film.title}</h3>
          <div className={styles.info}>
            <span className={styles.date}>{film.release_date.substr(0, 4)}</span>
            <span className={styles.separator}>-</span>
            <span className={styles.director}>{film.director}</span>
          </div>
        </header>

        <p className={styles.description}>
          {description}
        </p>

        <button
          type="button"
          className={styles.gotoDetails}
        >
          Go to details
        </button>
      </div>
    </div>
  );
};

export default HistoryListItem;
