import { combineReducers } from 'redux';
import slugify from 'slugify';

import { ADD_CATEGORY, /* REMOVE_CATEGORY, */ EDIT_CATEGORY } from '../actions/expenses';

function categories(state = {}, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return { ...state, [slugify(action.name)]: action.name };

    case EDIT_CATEGORY:
      return { ...state, [action.id]: action.newName };

    // case REMOVE_CATEGORY:

    default:
      return state;
  }
}

export default combineReducers({
  categories,
});
