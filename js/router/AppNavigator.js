import React, { PropTypes, Component } from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';

import { get } from 'lodash';


import { NavigationStack } from './navigationConfiguration';


@connect(({ nav }) => ({ nav }))
export default class AppNavigator extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { dispatch, nav } = this.props;
      if (get(nav, 'nav.routes[0].index', 0) === 0) return false;
      dispatch(NavigationActions.back());
      return true;
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
  }

  render() {
    const { dispatch, nav } = this.props;
    return <NavigationStack navigation={addNavigationHelpers({ dispatch, state: nav })} />;
  }
}
