import React from 'react';
import { connect } from 'react-redux';

import { SearchResultsItem } from './__components';

import useSearchResults from './SearchResults.hook';
import styles from './SearchResults.module.scss';
import { compose } from 'redux';
import { setLoading } from 'core/store/actions/films';

interface IProps {
  filteredFilms: IFilm[];
  setLoading: (loading: boolean) => void;
  submitted: boolean;
}

const SearchResults = (props: IProps) => {
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

const mapStateToProps = (state: any) => ({
  filteredFilms: state.films.filteredFilms,
  submitted: state.films.submitted,
});

const mapDispatchToProps = (dispatch: any) => ({
  setLoading: compose(dispatch, setLoading),
});

const SearchResultsConnected = connect(mapStateToProps, mapDispatchToProps)(SearchResults);

export default SearchResultsConnected;
