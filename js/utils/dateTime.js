import moment from 'moment';

const monthKey = date => moment(date).format('MM-YYYY');

export const currentMonthKey = () => monthKey(new Date());
export const lastMonthKey = () => monthKey(moment().subtract(1, 'month'));

export const monthTimestamp = (date = new Date()) => moment(date).startOf('month');
