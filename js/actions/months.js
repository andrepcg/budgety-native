import { monthKey } from '../utils/dateTime';

export const ADD_MONTH = 'ADD_MONTH';
export const SET_INCOME = 'SET_INCOME';

export const addMonth = () => ({ type: ADD_MONTH, monthKey: monthKey() });
export const setIncome = value => ({
  type: SET_INCOME,
  value,
  monthKey: monthKey(),
});
