import React from 'react';
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import selectexpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No Expenses</p>
      ) : (
        props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectexpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
