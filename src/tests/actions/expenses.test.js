import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const id = '1';
  const action = removeExpense({ id });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id
  });
});

test('should setup edit expense action object', () => {
  const id = '1';
  const updatedExpense = {
    note: 'Updated Note'
  };
  const action = editExpense(id, { note: 'Updated Note' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id,
    updates: {
      ...updatedExpense
    }
  })
});

test('should setup add expense action object with provided values', () => {
  const expense = {
    description: 'Rent',
    amount: '20000',
    createdAt: 1000,
    note: 'April Rent'
  };
  const action = addExpense(expense);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expense,
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});