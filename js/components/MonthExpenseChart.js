import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import { VictoryChart, VictoryBar, VictoryAxis } from 'victory-native';
import { range, random } from 'lodash';

import { monthDaysArray } from '~/utils/dateTime';

export default function MonthExpenseChart(props) {
  const data = monthDaysArray().map(day => {
    return { x: new Date(day), y: random(5) };
  });

  return (
    <View style={styles.chart}>
      <VictoryChart
        scale={{ x: 'time', y: 'linear' }}
        height={130}
        sortKey="x"
        domain={{
          x: [props.startOfMonth, props.endOfMonth],
          y: [0, 5],
        }}
        padding={40}
      >
        <VictoryAxis
          dependentAxis
          // tickCount={4}
          tickFormat={t => `${Math.round(t)}€`}
        />
        <VictoryBar data={data} />
      </VictoryChart>
    </View>
  );
}

MonthExpenseChart.propTypes = {
  startOfMonth: PropTypes.instanceOf(Date),
  endOfMonth: PropTypes.instanceOf(Date),
};

const styles = StyleSheet.create({
  chart: {
    height: 130,
    // flex: 1,
    // backgroundColor: 'blue',
  },
});
