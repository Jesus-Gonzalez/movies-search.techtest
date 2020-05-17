import React from 'react';
import renderer from 'react-test-renderer';

import { RawSpinner as Spinner } from '../Spinner';

it('renders', () => {
  expect(renderer.create(<Spinner />))
    .toMatchSnapshot();
});
