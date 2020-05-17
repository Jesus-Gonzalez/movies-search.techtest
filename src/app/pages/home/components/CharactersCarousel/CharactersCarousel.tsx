import React from 'react';

import {
  CharactersCarouselItem
} from './__components';

import styles from './CharactersCarouselContainer.module.scss';

interface IProps {
  characters: ICharacter[];
}

const CharactersCarousel = (props: IProps) => {
  const { characters } = props;

  return (
    <>
      <h2>Characters</h2>
      <div className={styles.scroll}>
        <ul className={styles.wrapper}>
          {characters.map((character: ICharacter) => (
            <CharactersCarouselItem
              key={character.name}
              character={character}
            />
          ))}
        </ul>
      </div>
      <hr className={styles.divider} />
    </>
  );
};

export default CharactersCarousel;
