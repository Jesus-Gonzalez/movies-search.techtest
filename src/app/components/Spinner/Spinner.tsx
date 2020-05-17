import React from 'react';

import styles from './Spinner.module.scss';

export function RawSpinner() {
  return (
    <span className={styles.ldsDualRing} />
  )
}

export default React.memo(RawSpinner);
