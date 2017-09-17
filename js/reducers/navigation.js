// import { NavigationActions } from 'react-navigation';

import { NavigationStack } from '../router/navigationConfiguration';

export default function nav(state, action) {
  let nextState;
  switch (action.type) {
    default:
      nextState = NavigationStack.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}
