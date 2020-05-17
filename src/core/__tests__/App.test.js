import React from 'react';
import renderer from 'react-test-renderer';

import { App } from 'core/App';

it('renders without crashing', () => {
  expect(renderer.create(<App />))
    .toMatchSnapshot();
});
