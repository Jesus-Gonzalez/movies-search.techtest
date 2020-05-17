interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

interface IFilm {
   "title": string;
    "episode_id": number;
    "opening_crawl": string;
    "director": string[];
    "producer": string;
    "release_date": string;
    "characters": string[];
    "planets": string[];
    "starships": string[];
    "vehicles": string[];
    "species": string[];
    "created": string;
    "edited": string;
    "url": string;
}

interface ICharacter {
  gender: string;
  height: string;
  mass: string;
  name: string;
}

interface IPlanet {
  climate: string;
  diameter: string;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
}

interface ISpecies {
  language: string;
  name: string;
  skin_colors: string;
}

interface IStarship {
  cargo_capacity: string;
  crew: string;
  length: string;
  manufacturer: string;
  model: string;
  name: string;
  passengers: string;
  starship_class: string;
}

interface IVehicle {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  vehicle_class: string;
}

interface IFilmObject {
  "title": string;
  "episode_id": number;
  "opening_crawl": string;
  "director": string;
  "producer": string;
  "characters": ICharacter[];
  "planets": IPlanet[];
  "starships": IStarship[];
  "vehicles": IVehicle[];
  "species": ISpecies[];
  "url": string;
}
