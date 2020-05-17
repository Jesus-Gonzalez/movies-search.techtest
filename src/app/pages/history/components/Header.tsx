import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => (
  <nav className={styles.wrapper}>
    <Link
      className={styles.link}
      to="/search"
    >
      Home
    </Link>
  </nav>
);

export default Header;
