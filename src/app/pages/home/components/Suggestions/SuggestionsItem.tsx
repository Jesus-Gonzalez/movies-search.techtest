import React from 'react';

import styles from './Suggestions.module.scss';

interface IProps {
  handleClickSuggestion: (film: IFilm) => void;
  film: IFilm;
}

const SuggestionsItem = (props: IProps) => {
  const { film, handleClickSuggestion } = props;

  return (
    <li
      onClick={() => handleClickSuggestion(film)}
      className={styles.item}
    >
      {film.title}
    </li>
  );
}

export default SuggestionsItem;
