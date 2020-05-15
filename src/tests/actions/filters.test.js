import moment from 'moment';
import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount 
} from '../../actions/filters';

test('should setup set text filter action object with provided text', () => {
  const text = 'rent';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should setup set text filter action object with default text', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should setup set start data filter action object with provided date', () => {
  const startDate = moment(1000);
  const action = setStartDate(startDate);
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate
  });
});

test('should setup set end date filter action object with provided date', () => {
  const endDate = moment(2000);
  const action = setEndDate(endDate);
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate
  });
});

test('should setup sort by date filter action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should setup sort by amount filter action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});
