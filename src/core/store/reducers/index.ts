import { combineReducers } from 'redux';

import history from './history';
import movies from './movies';

export default combineReducers({
  history,
  movies,
});
