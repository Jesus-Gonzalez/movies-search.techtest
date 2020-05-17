import React from 'react';
import { useParams } from 'react-router-dom';

interface IHookConfiguration {
  addToHistory: (film: IFilmObject) => void;
  film: IFilmObject;
  getFilm: (filmId: string) => void;
  history: IFilmObject[];
}

export default function useFilmPage (configuration: IHookConfiguration) {
  const { filmId } = useParams();
  const { addToHistory, film, getFilm, history } = configuration;

  React.useEffect(() => {
    getFilm(filmId);
  }, [filmId, getFilm]);

  React.useEffect(() => {
    if (!film || Object.keys(film).length === 0) return;

    const index = history
      .findIndex(item => item.url === film.url);

    if (index > -1) return;

    addToHistory(film);
  }, [film, history, addToHistory])
}
