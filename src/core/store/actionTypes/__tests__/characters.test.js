// every action type has the same pattern

import { Characters } from '../characters';

it('creates the action', () => {
  expect(Characters)
    .toMatchSnapshot();
});
