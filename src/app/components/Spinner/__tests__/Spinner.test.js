import React from 'react';
import renderer from 'react-test-renderer';

import { RawSpinner as Spinner } from '../Spinner';

it('render routes', () => {
  expect(renderer.create(<Spinner />))
    .toMatchSnapshot();
});
