import React from 'react';
import { useParams } from 'react-router-dom';

interface IHookConfiguration {
  getFilm: (filmId: string) => void;
}

export default function useFilmPage (configuration: IHookConfiguration) {
  const { filmId } = useParams();
  const { getFilm } = configuration;

  React.useEffect(() => {
    getFilm(filmId);
  }, [filmId, getFilm])
}
