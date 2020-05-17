import { combineReducers } from 'redux';

import characters from './characters';
import films from './films';
import history from './history';

export default combineReducers({
  characters,
  films,
  history,
});
