import moment from 'moment';
import getVisibleExpenses from '../../selectors/expenses';

const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 20000,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: 5000,
  createdAt: moment(0).add(4, 'days').valueOf()
}];

test('should filter expenses by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result.length).toBe(2);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter expenses by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result.length).toBe(2);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter expenses by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result.length).toBe(2);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should filter expenses by start date and end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0).subtract(2, 'day'),
    endDate: moment(0).add(2, 'day')
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result.length).toBe(1);
  expect(result).toEqual([expenses[0]]);
});

test('should sort expenses by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result.length).toBe(3);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});

test('should sort expenses by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result.length).toBe(3);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});
