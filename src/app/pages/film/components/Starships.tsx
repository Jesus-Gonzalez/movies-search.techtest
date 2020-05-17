import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  film: IFilmObject;
}

const Starships = ({ film }: IProps) => (
  <section id="objects-starships" className={styles.object}>
    <h3>Starships</h3>
    <div className={styles.objectWrapper}>
      {film.starships.map((starship: IStarship) => (
        <div key={starship.name} className={styles.objectItem}>
          <h4>{starship.name}</h4>
          <ul>
            <li>Passengers: {starship.passengers}</li>
            <li>Cargo Capacity: {starship.cargo_capacity}</li>
            <li>Length: {starship.length}</li>
            <li>Crew: {starship.crew}</li>
            <li>Length: {starship.length}</li>
            <li>Manufacturer: {starship.manufacturer}</li>
            <li>Model: {starship.model}</li>
            <li>Class: {starship.starship_class}</li>
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Starships;
