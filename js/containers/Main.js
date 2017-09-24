import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { endOfMonth, currentMonthKey } from '~/utils/dateTime';

import MonthExpenseChart from '~/components/MonthExpenseChart';

const mapStateToProps = state => {
  const { expenses, months } = state;

  const { date, fixedIncome, fixedExpenses, transactions } = months[currentMonthKey()];

  return {
    currentMonth: date,
    fixedIncome,
    fixedExpenses,
    transactions,
  };
};

@connect(mapStateToProps, {})
export default class Main extends Component {
  static propTypes = {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.summary}>
          <Text>Month: {this.props.currentMonth.toDateString()}</Text>
        </View>

        {/* <View style={styles.chart}> */}
          <MonthExpenseChart
            startOfMonth={this.props.currentMonth}
            endOfMonth={endOfMonth(this.props.currentMonth)}
          />
        {/* </View> */}

        <ScrollView style={styles.list}>
          <Text>List of expenses</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  summary: {
    // flex: 1,
    height: 200,
    backgroundColor: 'red',
  },
  chart: {
    height: 100,
    // backgroundColor: 'blue',
  },
  list: {
    flex: 1,
    backgroundColor: 'green',
  },
});
