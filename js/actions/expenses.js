export const ADD_CATEGORY = 'ADD_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';

export const addCategory = name => ({ type: ADD_CATEGORY, name });
export const removeCategory = name => ({ type: REMOVE_CATEGORY, name });
export const editCategory = (id, newName) => ({ type: EDIT_CATEGORY, id, newName });
