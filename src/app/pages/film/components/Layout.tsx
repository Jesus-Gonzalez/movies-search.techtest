import React from 'react';

import {
  Information,
  Characters,
  Planets,
  Species,
  Starships,
  Vehicles,
} from './__components'

import styles from './styles.module.scss';

interface IProps {
  film: IFilmObject;
}

export default function
  Layout (props: IProps) {
    const { film } = props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>{film.title}</h1>
          <Information film={film} />
          <h2>Objects</h2>
          <section id="objects" className={styles.objects}>
            <Characters film={film} />
            <Planets film={film} />
            <Species film={film} />
            <Starships film={film} />
            <Vehicles film={film} />
          </section>
        </div>
      </div>
    );
  }
