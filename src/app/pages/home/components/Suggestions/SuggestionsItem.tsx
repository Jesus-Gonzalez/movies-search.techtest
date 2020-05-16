import React from 'react';

import styles from './SuggestionsItem.module.scss';

const SuggestionsItem = (props: any) => {
  const { film } = props;

  return (
    <li className={styles.item}>
      {film.title}
    </li>
  );
}

export default SuggestionsItem;
