import moment from 'moment';
import dateArray from 'moment-array-dates';

const monthKey = date => moment(date).format('MM-YYYY');

export const currentMonthKey = () => monthKey(new Date());
export const lastMonthKey = () => monthKey(moment().subtract(1, 'month'));

export const startOfMonth = (date = new Date()) =>
  moment(date)
    .startOf('month')
    .toDate();

export const endOfMonth = (date = new Date()) =>
  moment(date)
    .endOf('month')
    .toDate();

export const monthDaysArray = (date = new Date()) =>
  dateArray.range(startOfMonth(date), endOfMonth(date))
