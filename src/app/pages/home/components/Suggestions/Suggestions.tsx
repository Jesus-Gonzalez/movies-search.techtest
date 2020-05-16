import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  handleSubmit as handleSubmitAction,
  toggleSuggestions,
} from 'core/store/actions/films'

import SuggestionsItem from './SuggestionsItem';

import useSuggestions from './Suggestions.hook';
import styles from './Suggestions.module.scss';

interface IProps {
  filteredFilms: IFilm[];
  handleSubmit: () => void;
  toggleSuggestions: () => void;
}

const Suggestions = (props: IProps) => {
  const { handleSubmit } = props;

  const {
    suggestions,
    viewMore,
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
  handleSubmit: compose(dispatch, handleSubmitAction),
  toggleSuggestions: compose(dispatch, toggleSuggestions),
});

const SuggestionsConnected = connect(null, mapDispatchToProps)(Suggestions);

export default SuggestionsConnected;
