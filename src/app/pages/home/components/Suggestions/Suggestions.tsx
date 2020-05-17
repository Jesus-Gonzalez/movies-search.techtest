import React from 'react';

import {
  SuggestionsList,
  SuggestionsItemViewMore,
} from './__components';

import { IHook } from './Suggestions.hook';
import { IProps } from './SuggestionsContainer';

import styles from './Suggestions.module.scss';

export type Props = IHook & IProps;

const Suggestions = (props: Props) => (
  <ul className={styles.wrapper}>
    <SuggestionsList
      {...props}
    />

    <SuggestionsItemViewMore
      {...props}
    />
  </ul>
);

export default Suggestions;
