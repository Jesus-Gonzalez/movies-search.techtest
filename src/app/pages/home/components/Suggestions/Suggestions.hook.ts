import React from 'react';
import { useHistory } from 'react-router-dom';

export interface IHook {
  handleClickSuggestion: (film: IFilm) => void;
  suggestions: IFilm[];
  viewMore: number;
}

interface IHookConfiguration {
  filteredFilms: IFilm[];
  setLoading: (loading: boolean) => void;
  toggleSuggestions: () => void;
}

export default function useSuggestions(configuration: IHookConfiguration): IHook {
  const history = useHistory();

  const { filteredFilms, setLoading, toggleSuggestions } = configuration;

  const handleClickSuggestion = React.useCallback((film: IFilm) => {
    setLoading(true);
    const frags = film.url.split('/');
    const idIndex = frags.length - 2;
    history.push(`/film/${frags[idIndex]}`);
  }, [history, setLoading]);

  React.useEffect(() => {
    const handlePressEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleSuggestions();
      }
    }

    document.addEventListener('keydown', handlePressEscapeKey)

    return () => {
      document.removeEventListener('keydown', handlePressEscapeKey)
    }
  });

  const suggestions = filteredFilms.slice(0, 3);
  const viewMore = filteredFilms.length - 3;

  return {
    handleClickSuggestion,
    suggestions,
    viewMore,
  };
}
