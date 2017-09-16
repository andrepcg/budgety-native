export const SET_NAME = 'SET_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_BIRTHDATE = 'SET_BIRTHDATE';

export const setName = name => ({ type: SET_NAME, name });
export const setEmail = email => ({ type: SET_EMAIL, email });
export const setBirthDate = birthDate => ({ type: SET_BIRTHDATE, birthDate });
