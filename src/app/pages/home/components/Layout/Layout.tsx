import React from 'react';

import { CharactersCarouselContainer, Search } from '../__components'

import styles from './Layout.module.scss';

const Layout = () => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <h1>Star Wars Wiki</h1>
      <CharactersCarouselContainer />
      <Search />
    </div>
  </div>
);

export default Layout;
