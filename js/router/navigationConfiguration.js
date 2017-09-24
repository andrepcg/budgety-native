// import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

// import Header from '../components/blocks/navigation/Header';
import MainContainer from '../containers/Main';
import TransactionContainer from '../containers/Transaction';
import CreditsComponent from '../components/screens/Credits';
import Drawer from '../components/Drawer';

// const navOptions = ({ navigation }) => ({
//   header: <Header
//   />,
// });

const drawerNav = DrawerNavigator({
  Main: {
    screen: MainContainer,
  },
  // Stats: {
  //   screen: StatsContainer,
  // },
},
{
  contentComponent: Drawer,
  drawerWidth: 250,
},
);

const routeConfiguration = {
  Drawer: {
    screen: drawerNav,
  },
  Transaction: {
    screen: TransactionContainer,
  },
  CreditsScreen: {
    screen: CreditsComponent,
  },
};

const stackNavigatorConfiguration = {
  initialRouteName: 'Drawer',
  headerMode: 'float',
};

export const NavigationStack = StackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration,
);
