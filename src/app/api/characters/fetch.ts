import axios from 'axios';

export const fetchCharacters = () => (
  axios({
    url: 'https://swapi.dev/api/people/',
    responseType: 'json'
  })
  .then(response => response.data)
)
