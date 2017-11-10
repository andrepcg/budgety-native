import { monthKey } from '../utils/dateTime';

import { ADD_MONTH, SET_INCOME } from '../actions/months';
import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from '../actions/expenses';
import { startOfMonth, currentMonthKey } from '../utils/dateTime';

//   months: {
//     "09-2017": { date, fixedIncome, fixedExpenses: [], transactions: [] }
//   },

const monthInitialState = () => ({
  date: startOfMonth(),
  fixedIncome: 0,
  fixedExpenses: [],
  expenses: [],
});

const monthsInitialState = {
  [currentMonthKey()]: monthInitialState(),
};

function month(state = {}, action) {
  switch (action.type) {
    case SET_INCOME:
      return {
        ...state,
        fixedIncome: action.value,
      };

    case ADD_MONTH:
      return monthInitialState();

    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [
          ...state.transactions,
          {
            id: uuid.v4(),
            category: action.category,
            description: action.description,
            date: action.date,
            value: action.value,
          },
        ],
      };

    case REMOVE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(e => e.id !== action.id),
      };

    default:
      return state;
  }
}

export default function months(state = monthsInitialState, action) {
  switch (action.type) {
    case SET_INCOME:
    case ADD_EXPENSE:
    case ADD_MONTH:
      return {
        ...state,
        [action.monthKey]: month(state[action.monthKey], action),
      };

    default:
      return state;
  }
}
