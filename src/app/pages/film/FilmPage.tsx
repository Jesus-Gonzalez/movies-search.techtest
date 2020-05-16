import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getFilm } from 'core/store/actions/films';
import { Loading } from 'app/components';

import useFilmPage from './FilmPage.hook';
import styles from './FilmPage.module.scss';

interface IProps {
  film: IFilmObject;
  getFilm: (filmId: string) => void;
  loading: boolean;
}

export function FilmPage(props: IProps) {
  useFilmPage(props);

  const { film, loading } = props;

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>{film.title}</h1>
        <section id="information">
          <h2>Information</h2>
          <p><strong>Directed by:</strong> {film.director}</p>
          <p><strong>Produced by:</strong> {film.producer}</p>
          <p><strong>Synopsis:</strong> {film.opening_crawl}</p>
        </section>
        <h2>Objects</h2>
        <section id="objects" className={styles.objects}>
          <section id="objects-characters" className={styles.object}>
            <h3>Characters</h3>
            <div className={styles.objectWrapper}>
              {film.characters.map((character: ICharacter) => (
                <div key={character.name} className={styles.objectItem}>
                  <h4>{character.name}</h4>
                  <ul>
                    <li>Height: {character.height}</li>
                    <li>Mass: {character.mass}</li>
                    <li>Gender: {character.gender}</li>
                  </ul>
                </div>
              ))}
            </div>
          </section>
          <section id="objects-planets" className={styles.object}>
            <h3>Planets</h3>
            <div className={styles.objectWrapper}>
              {film.planets.map((planet: IPlanet) => (
                <div key={planet.name} className={styles.objectItem}>
                  <h4>{planet.name}</h4>
                  <ul>
                    <li>Climate: {planet.climate}</li>
                    <li>Diameter: {planet.diameter}</li>
                    <li>Gravity: {planet.gravity}</li>
                    <li>Rotation Period: {planet.rotation_period}</li>
                    <li>Orbital Period: {planet.orbital_period}</li>
                    <li>Population: {planet.population}</li>
                  </ul>
                </div>
              ))}
            </div>
          </section>
          <section id="objects-species" className={styles.object}>
            <h3>Species</h3>
            <div className={styles.objectWrapper}>
              {film.species.map((species: ISpecies) => (
                <div key={species.name} className={styles.objectItem}>
                  <h4>{species.name}</h4>
                  <ul>
                    <li>Language: {species.language}</li>
                    <li>Skin Colors: {species.skin_colors}</li>
                  </ul>
                </div>
              ))}
            </div>
          </section>
          <section id="objects-starships" className={styles.object}>
            <h3>Starships</h3>
            <div className={styles.objectWrapper}>
              {film.starships.map((starship: IStarship) => (
                <div key={starship.name} className={styles.objectItem}>
                  <h4>{starship.name}</h4>
                  <ul>
                    <li>Passengers: {starship.passengers}</li>
                    <li>Cargo Capacity: {starship.cargo_capacity}</li>
                    <li>Length: {starship.length}</li>
                    <li>Crew: {starship.crew}</li>
                    <li>Length: {starship.length}</li>
                    <li>Manufacturer: {starship.manufacturer}</li>
                    <li>Model: {starship.model}</li>
                    <li>Class: {starship.starship_class}</li>
                  </ul>
                </div>
              ))}
            </div>
          </section>
          <section id="objects-vehicles" className={styles.object}>
            <h3>Vehicles</h3>
            <div className={styles.objectWrapper}>
              {film.vehicles.map((vehicle: IVehicle) => (
                <div key={vehicle.name} className={styles.objectItem}>
                  <h4>{vehicle.name}</h4>
                  <ul>
                    <li>Passengers: {vehicle.passengers}</li>
                    <li>Cargo Capacity: {vehicle.cargo_capacity}</li>
                    <li>Length: {vehicle.length}</li>
                    <li>Crew: {vehicle.crew}</li>
                    <li>Length: {vehicle.length}</li>
                    <li>Manufacturer: {vehicle.manufacturer}</li>
                    <li>Model: {vehicle.model}</li>
                    <li>Class: {vehicle.vehicle_class}</li>
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  film: state.films.film,
  loading: state.films.loading,
});

const mapDispatchToProps = (dispatch: any) => ({
  getFilm: compose(dispatch, getFilm),
});

const FilmPageConnected = connect(mapStateToProps, mapDispatchToProps)(FilmPage);

export default FilmPageConnected;
