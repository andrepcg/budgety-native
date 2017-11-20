import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import { VictoryChart, VictoryBar, VictoryAxis } from 'victory-native';
import { range, random } from 'lodash';

import { monthDaysArray } from '~/utils/dateTime';

const Container = styled.View`height: 130;`;

export default function MonthExpenseChart(props) {
  const data = monthDaysArray().map(day => {
    return { x: new Date(day), y: random(5) };
  });

  return (
    <Container>
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
    </Container>
  );
}

MonthExpenseChart.propTypes = {
  startOfMonth: PropTypes.instanceOf(Date),
  endOfMonth: PropTypes.instanceOf(Date),
};
