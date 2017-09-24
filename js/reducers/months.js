import { ADD_MONTH } from '../actions/months';
import { startOfMonth, currentMonthKey } from '../utils/dateTime';

//   months: {
//     "09-2017": { date, fixedIncome, fixedExpenses: [], transactions: [] }
//   },

const monthInitialState = () => ({
  date: startOfMonth(),
  fixedIncome: 0,
  fixedExpenses: [],
  transactions: [],
});

const monthsInitialState = {
  [currentMonthKey()]: monthInitialState()
};

export default function months(state = monthsInitialState, action) {
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
