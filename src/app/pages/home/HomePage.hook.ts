import React from 'react';

interface IHookConfiguration {
  films: IFilm[];
  fetchFilms: () => void;
}

export default function useHomePage (configuration: IHookConfiguration) {
  const { films, fetchFilms } = configuration;

  React.useEffect(() => {
    if (films && films.length) {
      return;
    }

    fetchFilms();
  }, [films, fetchFilms])
}
