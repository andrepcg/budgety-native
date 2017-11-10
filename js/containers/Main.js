import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { endOfMonth, currentMonthKey } from '~/utils/dateTime';

import MonthExpenseChart from '~/components/MonthExpenseChart';
import Card from '~/components/Card';
import { GREEN } from '~/styles';

const mapStateToProps = state => {
  const { months } = state;

  const { date, fixedIncome, fixedExpenses, expenses } = months[currentMonthKey()];

  return {
    currentMonth: date,
    fixedIncome,
    fixedExpenses,
    expenses,
  };
};

@connect(mapStateToProps, {})
export default class Main extends Component {
  static propTypes = {};

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <View style={styles.summary}>
            <Text>Month: {this.props.currentMonth.toDateString()}</Text>
          </View>
        </Card>
        {/* <View style={styles.chart}> */}
        <Card>
          <MonthExpenseChart
            startOfMonth={this.props.currentMonth}
            endOfMonth={endOfMonth(this.props.currentMonth)}
          />
        </Card>
        {/* </View> */}

        <Card size={2}>
          <ScrollView style={styles.list}>
            <Text>List of expenses</Text>
          </ScrollView>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREEN,
    paddingTop: 10,
  },
  summary: {
    // flex: 1,
    // height: 150,
  },
  chart: {
    height: 100,
    // backgroundColor: 'blue',
  },
  list: {
    // flex: 1,
    // backgroundColor: 'green',
  },
});
