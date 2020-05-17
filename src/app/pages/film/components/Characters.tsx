import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  film: IFilmObject;
}

const Characters = ({ film }: IProps) => (
  <section id="objects-characters" className={styles.object}>
    <h3>Characters</h3>
    <div className={styles.objectWrapper}>
      {film.characters.map((character: ICharacter) => (
        <div key={character.name} className={styles.objectItem}>
          <h4>{character.name}</h4>
          <ul>
            <li>Height: {character.height}</li>
            <li>Mass: {character.mass}</li>
            <li>Gender: {character.gender}</li>
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Characters;
