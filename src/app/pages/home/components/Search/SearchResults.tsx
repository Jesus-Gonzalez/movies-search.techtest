import React from 'react';
import { connect } from 'react-redux';

import { SearchResultsItem } from './__components';

import useSearchResults from './SearchResults.hook';
import styles from './SearchResults.module.scss';

interface IProps {
  filteredFilms: IFilm[];
  submitted: boolean;
}

const SearchResults = (props: IProps) => {
  const { handleGotoDetail } = useSearchResults();

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

const mapStateToProps = (state: any) => ({
  filteredFilms: state.films.filteredFilms,
  submitted: state.films.submitted,
});

const SearchResultsConnected = connect(mapStateToProps)(SearchResults);

export default SearchResultsConnected;
