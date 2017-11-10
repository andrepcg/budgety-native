import { monthKey } from '../utils/dateTime';

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';

export const addCategory = name => ({ type: ADD_CATEGORY, name });
export const removeCategory = name => ({ type: REMOVE_CATEGORY, name });
export const editCategory = (id, newName) => ({
  type: EDIT_CATEGORY,
  id,
  newName,
});

export const addExpense = (value, description, category, date) => ({
  type: ADD_EXPENSE,
  category,
  description,
  date,
  value,
  monthKey: monthKey(date),
});

export const editExpense = (id, value, description, category, date) => ({
  type: EDIT_EXPENSE,
  category,
  description,
  date,
  id,
  value,
  monthKey: monthKey(date),
});

export const removeExpense = (id, date) => ({
  type: REMOVE_EXPENSE,
  id,
  monthKey: monthKey(date),
});
