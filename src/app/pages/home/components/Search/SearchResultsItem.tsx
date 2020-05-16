import React from 'react';
import { connect } from 'react-redux';

interface IProps {
  filteredFilms: IFilm[];
  submitted: boolean;
}

const SearchResults = (props: IProps) => {
  const { filteredFilms, submitted } = props;

  if (!submitted) return null;

  if (!filteredFilms || !filteredFilms.length) {
    return <p>No results</p>;
  }

  return (
    <div>
      {filteredFilms.map((film: IFilm) => <p key={film.episode_id}>{film.title}</p>)}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  filteredFilms: state.films.filteredFilms,
  submitted: state.films.submitted,
});

// const mapDispatchToProps = (dispatch: any) => ({
//   buildFilm: (filmId: number) => compose(dispatch, buildFilm)(filmId),
// });

// const SearchFormConnected = connect(mapStateToProps, mapDispatchToProps)(SearchForm);
const SearchResultsConnected = connect(mapStateToProps)(SearchResults);

export default SearchResultsConnected;
