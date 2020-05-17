import React from 'react';
import renderer from 'react-test-renderer';

import { Routing } from 'core/Routing';

it('render routes', () => {
  expect(renderer.create(<Routing />))
    .toMatchSnapshot();
});
