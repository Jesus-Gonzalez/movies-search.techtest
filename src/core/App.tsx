import React from 'react';

import { Routing, Store } from './__components'

export const App = () => {
  return (
    <Store>
      <Routing />
    </Store>
  );
}
