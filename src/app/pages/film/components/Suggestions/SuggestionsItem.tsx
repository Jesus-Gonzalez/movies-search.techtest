import React from 'react';

import styles from './Suggestions.module.scss';

const SuggestionsItem = (props: any) => {
  const { film } = props;

  console.log('@suggestionitem.film', film)

  return (
    <li className={styles.item}>
      {film.title}
    </li>
  );
}

export default SuggestionsItem;
