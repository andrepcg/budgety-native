import { SET_NAME, SET_EMAIL, SET_BIRTHDATE } from '../actions/user';

const initialState = {
  email: null,
  name: null,
  birthDate: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
