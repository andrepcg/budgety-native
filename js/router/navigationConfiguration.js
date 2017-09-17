// import React from 'react';
import { StackNavigator } from 'react-navigation';

// import Header from '../components/blocks/navigation/Header';
import MainContainer from '../containers/Main';
import CreditsComponent from '../components/screens/Credits';

// const navOptions = ({ navigation }) => ({
//   header: <Header
//   />,
// });

const routeConfiguration = {
  MainScreen: {
    screen: MainContainer,
  },
  CreditsScreen: {
    screen: CreditsComponent,
  },
};

const stackNavigatorConfiguration = {
  initialRouteName: 'MainScreen',
  headerMode: 'float',
  cardStyle: {
    backgroundColor: 'white',
    shadowRadius: 0,
    shadowOpacity: 0,
  },
};

export const NavigationStack = StackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration,
);
