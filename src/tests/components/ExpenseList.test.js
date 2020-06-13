import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpenseList } from '../../components/ExpenseList';

test('should render ExpensesList correctly with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses}/>)
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesList correctly with message if no expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={[]}/>)
  expect(wrapper).toMatchSnapshot();
});
