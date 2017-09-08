// import { NavigationActions } from 'react-navigation';

// import { AppNavigator } from '../router/AppNavigator';
import { NavigationStack } from '../router/navigationConfiguration';


export default function nav(state, action) {
  let nextState;
  switch (action.type) {
    case 'TOGGLE_DRAWER': {
      const a = {
        type: 'Navigation/NAVIGATE',
        routeName: state.routes[0].index === 0 ? 'DrawerOpen' : 'DrawerClose',
      };
      return NavigationStack.router.getStateForAction(a, state);
    }

    default:
      nextState = NavigationStack.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}
