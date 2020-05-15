import React from 'react';

import styles from './SuggestionsBox.module.scss';

const SuggestionsBox = (props: any) => {
  return (
    <ul className={styles.suggestionsBox}>
      <li>Star Wars: la amenaza fantasma</li>
      <li>Star Wars: capitulo tercero</li>
    </ul>
  );
}

export default SuggestionsBox;
