import React from 'react';

import styles from './Suggestions.module.scss';

import { Props } from './Suggestions';

const SuggestionsItem = (props: Props) => {
  const { viewMore, handleSubmit } = props;

  if (viewMore < 0) return null;

  return (
    <li
      className={styles.item}
      onClick={handleSubmit}
    >
      {viewMore} more results
    </li>
  );
}

export default SuggestionsItem;
