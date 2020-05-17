import React from 'react';

interface IHookConfiguration {
  fetchCharacters: () => void;
}

export default function useCharactersCarousel(configuration: IHookConfiguration): void {
  const { fetchCharacters } = configuration;

  React.useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);
}
