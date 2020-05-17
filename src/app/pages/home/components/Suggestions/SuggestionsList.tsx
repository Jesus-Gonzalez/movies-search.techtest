import React from 'react';

import { SuggestionsItem } from './__components';

import { Props } from './Suggestions';

export default function
  SuggestionsList (props: Props) {
    const { suggestions, handleClickSuggestion } = props;

    return (
      <>
        {suggestions.map((suggestion: IFilm) => (
          <SuggestionsItem
            key={suggestion.episode_id}
            handleClickSuggestion={handleClickSuggestion}
            film={suggestion}
          />
        ))}
      </>
    )
  }
