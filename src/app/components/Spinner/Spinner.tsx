import React from 'react';

import styles from './Spinner.module.scss';

export default React.memo(
  function Spinner() {
    return (
      <span className={styles.ldsDualRing} />
    )
  }
)
