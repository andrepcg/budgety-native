import { ADD_MONTH } from '../actions/months';
import { monthTimestamp } from '../utils/dateTime';

//   months: {
//     "09-2017": { date, fixedIncome, fixedExpenses: [], transactions: [] }
//   },

const monthInitialState = () => ({
  date: monthTimestamp(),
  fixedIncome: 0,
  fixedExpenses: [],
  transactions: [],
});

export default function months(state = {}, action) {
  switch (action.type) {
    case ADD_MONTH:
      return {
        ...state,
        [action.monthKey]: monthInitialState(),
      };

    default:
      return state;
  }
}
