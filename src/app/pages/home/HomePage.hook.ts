import React from 'react';

interface IHookConfiguration {
  films: IFilm[];
  fetchFilms: () => void;
  reset: () => void;
}

export default function useHomePage (configuration: IHookConfiguration) {
  const { films, fetchFilms, reset } = configuration;

  React.useEffect(() => {
    if (films && films.length) {
      return;
    }

    fetchFilms();
  }, [films, fetchFilms]);

  React.useEffect(() => {
    reset();
  }, [reset]);
}
