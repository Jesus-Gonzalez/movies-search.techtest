import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  setLoading,
  toggleSuggestions,
} from 'core/store/actions/films';

import useSuggestions from './Suggestions.hook';

import { Suggestions } from './__components';

export interface IProps {
  filteredFilms: IFilm[];
  handleSubmit: (event: React.FormEvent<Element>) => void;
  setLoading: (loading: boolean) => void;
  toggleSuggestions: () => void;
}

const SuggestionsContainer = (props: IProps) => {
  const hook = useSuggestions(props);

  if (hook.suggestions.length === 0) {
    return null;
  }

  return (
    <Suggestions
      {...props}
      {...hook}
    />
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  toggleSuggestions: compose(dispatch, toggleSuggestions),
  setLoading: compose(dispatch, setLoading),
});

const SuggestionsContainerConnected = connect(null, mapDispatchToProps)(SuggestionsContainer);

export default SuggestionsContainerConnected;
