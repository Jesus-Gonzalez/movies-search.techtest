import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  film: IFilmObject;
}

const Vehicles = ({ film }: IProps) => (
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
);

export default Vehicles;
