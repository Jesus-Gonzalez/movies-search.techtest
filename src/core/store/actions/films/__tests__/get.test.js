import { getFilm } from '../get';

it('creates the action', () => {
  expect(getFilm('star wars'))
    .toMatchSnapshot();
});
