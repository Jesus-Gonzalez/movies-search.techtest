import { fetchCharacters } from '../fetch';

it('creates the action', () => {
  expect(fetchCharacters())
    .toMatchSnapshot();
});
