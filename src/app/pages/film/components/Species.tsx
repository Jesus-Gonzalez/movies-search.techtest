import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  film: IFilmObject;
}

const Species = ({ film }: IProps) => (
  <section id="objects-species" className={styles.object}>
    <h3>Species</h3>
    <div className={styles.objectWrapper}>
      {film.species.map((species: ISpecies) => (
        <div key={species.name} className={styles.objectItem}>
          <h4>{species.name}</h4>
          <ul>
            <li>Language: {species.language}</li>
            <li>Skin Colors: {species.skin_colors}</li>
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Species;
