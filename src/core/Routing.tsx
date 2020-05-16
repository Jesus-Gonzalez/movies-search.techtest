import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import LoadingPage from '../app/pages/loading/LoadingPage';

const HomePage = React.lazy(() => import('../app/pages/home/HomePage'));
const FilmPage = React.lazy(() => import('../app/pages/film/FilmPage'));

export const Routing = () => {
  return (
    <Router>
      <React.Suspense
        fallback={<LoadingPage />}
      >
        <Switch>
          <Route exact path="/search" component={HomePage} />
          <Route exact path="/film/:filmId" component={FilmPage} />
          <Route render={() => <Redirect to="/search" />} />
        </Switch>
      </React.Suspense>
    </Router>
  )
}
