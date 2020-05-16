import React from 'react';

interface IHook {
  suggestions: IFilm[];
  viewMore: number;
}

interface IHookConfiguration {
  filteredFilms: IFilm[];
  toggleSuggestions: () => void;
}

export default function useSuggestions(configuration: IHookConfiguration): IHook {
  const { filteredFilms, toggleSuggestions } = configuration;

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
    suggestions,
    viewMore,
  };
}
