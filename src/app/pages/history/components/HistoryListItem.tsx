import React from 'react';

import styles from './HistoryListItem.module.scss';
import { formatOpeningCrawl } from 'core/utils';

interface IProps {
  film: IFilmObject;
  handleGotoDetail: (film: IFilmObject) => void;
  remove: (film: IFilmObject) => void;
}

const HistoryListItem = (props: IProps) => {
  const {
    film,
    handleGotoDetail,
    remove
  } = props;

  const description = formatOpeningCrawl(film.opening_crawl);

  const handleRemove = (event: React.FormEvent) => {
    event.stopPropagation();
    remove(film);
  };

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
            <span className={styles.director}>{film.director}</span>
          </div>
        </header>

        <p className={styles.description}>
          {description}
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.gotoDetails}
          >
            Go to details
          </button>
          <button
            className={styles.remove}
            type="button"
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryListItem;
