import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { toggleSuggestions } from 'core/store/actions/films'

import SuggestionsItem from './SuggestionsItem';

import useSuggestions from './Suggestions.hook';
import styles from './Suggestions.module.scss';

interface IProps {
  filteredFilms: IFilm[];
  toggleSuggestions: () => void;
}

const Suggestions = (props: IProps) => {
  useSuggestions(props);

  const { filteredFilms } = props;

  return (
    <ul className={styles.wrapper}>
      {
      filteredFilms.length === 0
        ? <li>No results</li>
        : filteredFilms.map((film: IFilm) =>
            <SuggestionsItem
              key={film.episode_id}
              film={film}
            />
          )
      }
    </ul>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  toggleSuggestions: compose(dispatch, toggleSuggestions),
});

const SuggestionsConnected = connect(null, mapDispatchToProps)(Suggestions);

export default SuggestionsConnected;
