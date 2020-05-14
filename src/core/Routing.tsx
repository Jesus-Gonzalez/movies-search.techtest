import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoadingPage from '../app/pages/loading/LoadingPage';

const HomePage = React.lazy(() => import('../app/pages/home/HomePage'));
const DetailPage = React.lazy(() => import('../app/pages/detail/DetailPage'));

export const Routing = () => {
  return (
    <Router>
      <React.Suspense
        fallback={<LoadingPage />}
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/detail" component={DetailPage} />
        </Switch>
      </React.Suspense>
    </Router>
  )
}
