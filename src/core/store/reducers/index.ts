import { combineReducers } from 'redux';

import films from './films';
import history from './films';

export default combineReducers({
  films,
  history,
});
