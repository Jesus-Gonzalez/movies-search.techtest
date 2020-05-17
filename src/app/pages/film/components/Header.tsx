import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss'

const Header = () => (
  <nav>
    <Link
      to="/search"
      className={styles.link}
    >
      Home
    </Link>
    <Link
      to="/history"
      className={styles.link}
    >
      History
    </Link>
  </nav>
)

export default Header;
