import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import LogoWhite from '~/assets/images/logo_white.png';
import Pattern from '~/assets/images/background_pattern.png';
import { GREEN, GREEN_DARKER } from '~/styles/';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={LogoWhite} style={styles.logo} />
        <Image source={Pattern} style={styles.pattern} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREEN,
    alignItems: 'center'
  },
  logo: {
    // position: 'absolute',
    width: 240,
    // left: Dimensions.get('window').width / 2 - 25,
    top: 200,
    resizeMode: 'contain'
  },
  pattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: Dimensions.get('window').height,
    resizeMode: 'repeat'
  },
});
