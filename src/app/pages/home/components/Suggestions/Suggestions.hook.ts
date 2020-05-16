import React from 'react';

interface IHookConfiguration {
  toggleSuggestions: () => void;
}

export default function useSuggestions(configuration: IHookConfiguration) {
  const { toggleSuggestions } = configuration;

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
}
