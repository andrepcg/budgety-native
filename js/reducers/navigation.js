import { NavigationActions } from 'react-navigation';

import { NavigationStack } from '../router/navigationConfiguration';

export default function nav(state, action) {
  let nextState;
  switch (action.type) {
    case 'OPEN_TRANSACTION': {
      const navigationAction = NavigationActions.navigate({
        routeName: 'Transaction',
        params: {
          id: action.id,
        },
      });

      return NavigationStack.router.getStateForAction(navigationAction, state);
    }

    default:
      nextState = NavigationStack.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}
