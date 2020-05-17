import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { fetchCharacters } from 'core/store/actions/characters';

import CharactersCarousel from './CharactersCarousel';
import useCharactersCarousel from './CharactersCarouselContainer.hook';

export interface IProps {
  characters: ICharacter[];
  fetchCharacters: () => void;
}

const CharactersCarouselContainer = (props: IProps) => {
  useCharactersCarousel(props);

  const { characters } = props;

  return (
    <CharactersCarousel
      characters={characters}
    />
  );
};

const mapStateToProps = (state: any) => ({
  characters: state.characters.items,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchCharacters: compose(dispatch, fetchCharacters),
});

const CharactersCarouselContainerConnected = connect(mapStateToProps, mapDispatchToProps)(CharactersCarouselContainer);

export default CharactersCarouselContainerConnected;
