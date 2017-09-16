import { combineReducers } from 'redux';

import nav from './navigation';
import months from './months';
import expenses from './expenses';
import settings from './settings';
import user from './user';

export default combineReducers({
  nav,
  months,
  expenses,
  settings,
  user,
});
