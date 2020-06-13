import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSumarry with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={250} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSumarry with multiple expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={4} expensesTotal={25024} />);
  expect(wrapper).toMatchSnapshot();
});