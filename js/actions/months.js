import { monthKey } from '../utils/dateTime';

export const ADD_MONTH = 'ADD_MONTH';

export const addMonth = () => ({ type: ADD_MONTH, monthKey: monthKey() });
