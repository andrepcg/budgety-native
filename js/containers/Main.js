import React, { PropTypes, Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';


// @connect()
export default class Main extends Component {
  static propTypes = {
  }

  render() {
    return (
      <View>
        <Text>Main</Text>
      </View>
    );
  }
}
