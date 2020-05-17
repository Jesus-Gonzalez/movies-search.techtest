import React from 'react';

import { Search } from '../__components'

import styles from './Layout.module.scss';

const Layout = () => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <h1>Star Wars Wiki</h1>
      <Search />
    </div>
  </div>
);

export default Layout;
