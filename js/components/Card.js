import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

export default function Card({ children, size = 1 }) {
  return <View style={[styles.card, { flex: size }]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 0,
    marginBottom: 20,
  },
});
