import React from 'react';

import styles from './SearchResultsItem.module.scss';

interface IProps {
  film: IFilm;
  handleGotoDetail: (film: IFilm) => void;
}

const SearchResultsItem = (props: IProps) => {
  const { film, handleGotoDetail } = props;

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

export default SearchResultsItem;
