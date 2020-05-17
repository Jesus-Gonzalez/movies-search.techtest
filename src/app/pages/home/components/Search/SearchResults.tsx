import React from 'react';

import { SearchResultsItem } from './__components';

import useSearchResults from './SearchResults.hook';
import styles from './SearchResults.module.scss';

import { IHook } from './SearchResults.hook';
import { IProps } from './SearchResultsContainer';

type Props = IHook & IProps;

const SearchResults = (props: Props) => {
  const { handleGotoDetail } = useSearchResults(props);

  const { filteredFilms, submitted } = props;

  if (!submitted) return null;

  if (!filteredFilms || !filteredFilms.length) {
    return <p>No results</p>;
  }

  return (
    <div className={styles.wrapper}>
      {
        filteredFilms
          .map((film: IFilm) => (
            <SearchResultsItem
              key={film.episode_id}
              film={film}
              handleGotoDetail={handleGotoDetail}
            />
          ))
      }
    </div>
  );
};

export default SearchResults;
