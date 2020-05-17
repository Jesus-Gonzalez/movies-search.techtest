import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  film: IFilmObject;
}

const Planets = ({ film }: IProps) => (
  <section id="objects-planets" className={styles.object}>
    <h3>Planets</h3>
    <div className={styles.objectWrapper}>
      {film.planets.map((planet: IPlanet) => (
        <div key={planet.name} className={styles.objectItem}>
          <h4>{planet.name}</h4>
          <ul>
            <li>Climate: {planet.climate}</li>
            <li>Diameter: {planet.diameter}</li>
            <li>Gravity: {planet.gravity}</li>
            <li>Rotation Period: {planet.rotation_period}</li>
            <li>Orbital Period: {planet.orbital_period}</li>
            <li>Population: {planet.population}</li>
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Planets;
