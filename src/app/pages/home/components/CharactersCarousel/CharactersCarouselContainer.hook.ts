import React from 'react';

interface IHookConfiguration {
  characters: ICharacter[];
  fetchCharacters: () => void;
}

export default function useCharactersCarousel(configuration: IHookConfiguration): void {
  const { fetchCharacters, characters } = configuration;

  React.useEffect(() => {
    if (characters && characters.length) return;

    fetchCharacters();
  }, [fetchCharacters, characters]);
}
