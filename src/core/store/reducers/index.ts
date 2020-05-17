import { combineReducers } from 'redux';

import films from './films';
import history from './history';

export default combineReducers({
  films,
  history,
});
