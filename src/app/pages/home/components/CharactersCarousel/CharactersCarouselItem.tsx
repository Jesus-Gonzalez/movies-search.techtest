import React from 'react';

import styles from './CharactersCarouselContainer.module.scss';

interface IProps {
  character: ICharacter;
}

const SuggestionsItem = (props: IProps) => {
  const { character } = props;

  return (
    <li
      className={styles.item}
    >
      <div className={styles.avatarWrapper}>
        <img
          className={styles.avatarImage}
          src="https://source.unsplash.com/random/125x125"
          alt={"logo"}
        />
      </div>
      <strong className={styles.name}>{character.name}</strong>
      <span>
        <strong>Height: </strong>
        {character.height}m
      </span>
      <span>
        <strong>Mass: </strong>
        {character.mass}kg
      </span>
      <span>
        <strong>Gender: </strong>
        {character.gender}
      </span>
    </li>
  );
}

export default SuggestionsItem;
