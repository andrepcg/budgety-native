import React, { Component } from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './router/AppNavigator';
import Splash from './components/screens/Splash';
import configureStore from './configureStore';

console.disableYellowBox = true;

export default class setup extends Component {
  state = {
    hydrated: false,
  };

  componentDidMount() {
    this.store = configureStore(this.onHydrate);
  }

  onHydrate = (err, restoredState = {}) => {
    this.setState({ hydrated: true });
  };

  render() {
    const { hydrated } = this.state;
    const store = this.store;

    if (!store || !hydrated) return <Splash />;
    // return <Splash />;

    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
