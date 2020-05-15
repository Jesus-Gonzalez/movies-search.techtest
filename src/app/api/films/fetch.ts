import axios from 'axios';

export const fetchFilms = () => (
  axios({
    url: 'https://swapi.dev/api/films/',
    responseType: 'json'
  })
  .then(response => response.data)
)
