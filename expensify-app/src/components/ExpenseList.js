import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenseSelectors'

const renderItems = (expenses) => {
  return expenses.map((expense) => (
    <ExpenseListItem key={expense.id} {...expense}/>
  ))
}

const ExpenseList = (props) => (
  <div>
   <h1>ExpenseList </h1>
   { renderItems(props.expenses) }
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  }
}

export default connect(mapStateToProps)(ExpenseList);