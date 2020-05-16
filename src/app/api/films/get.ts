import axios from 'axios';

interface IObject {
  data: any;
  key: string;
}

const apiBase = 'https://swapi.dev/api';
const filmObjects = [
  'characters',
  'planets',
  'species',
  'starships',
  'vehicles',
];

export const getFilm = async (filmId: string) => {
  const film = await axios({
      url: `${apiBase}/films/${filmId}`,
      responseType: 'json'
    })
    .then(response => response.data);

  // fetch every pending object on film
  const objects: IObject[] = await Promise.all(
    filmObjects.reduce((acc: any, key: string) => (
      acc.concat(
        film[key].map((url: string) =>
          axios({ url, responseType: 'json' })
            .then(({ data }) => ({ data, key }))
        ))), []));

  objects
    .forEach(({ key }: IObject) => (
      Object.assign(film, { [key]: [] })
    ));

  objects.forEach(
    ({ data, key }) => {
        Object.assign(film, { [key]: film[key].concat(data) })
    });

  return film;
}
