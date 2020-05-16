import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  setLoading,
  toggleSuggestions,
} from 'core/store/actions/films';

import SuggestionsItem from './SuggestionsItem';

import useSuggestions from './Suggestions.hook';
import styles from './Suggestions.module.scss';

interface IProps {
  filteredFilms: IFilm[];
  handleSubmit: (event: React.FormEvent<Element>) => void;
  setLoading: (loading: boolean) => void;
  toggleSuggestions: () => void;
}

const Suggestions = (props: IProps) => {
  const { handleSubmit } = props;

  const {
    suggestions,
    viewMore,
    handleClickSuggestion,
  } = useSuggestions(props);

  if (suggestions.length === 0) {
    return null;
  }

  return (
    <ul className={styles.wrapper}>
      {
        suggestions.map((suggestion: IFilm) => (
          <SuggestionsItem
            key={suggestion.episode_id}
            handleClickSuggestion={handleClickSuggestion}
            film={suggestion}
          />
        ))
      }

      {
        viewMore > 0 && (
          <li
            className={styles.item}
            onClick={handleSubmit}
          >
            {viewMore} more results
          </li>
        )
      }
    </ul>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  toggleSuggestions: compose(dispatch, toggleSuggestions),
  setLoading: compose(dispatch, setLoading),
});

const SuggestionsConnected = connect(null, mapDispatchToProps)(Suggestions);

export default SuggestionsConnected;
