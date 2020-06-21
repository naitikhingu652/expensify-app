import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup expenses reducer default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove an expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state.length).toBe(2);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove an expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 'Invalid',
  };
  const state = expensesReducer(expenses, action);
  expect(state.length).toBe(3);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Laptop',
    note: '',
    createdAt: 20000,
    amount: 400000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state.length).toBe(4);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense by id', () => {
  const amount = 25000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state.length).toBe(3);
  expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if id not found', () => {
  const amount = 25000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'Invalid',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state.length).toBe(3);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state.length).toBe(1);
  expect(state).toEqual([expenses[1]]);
});
