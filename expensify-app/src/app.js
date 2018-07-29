import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './router/AppRouter'
import configureStore from './store/configureStore'

import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenseSelectors'
  
const store = configureStore()

store.dispatch(addExpense({description: 'Water bill', amount: 4000, createdAt: 1100}))
store.dispatch(addExpense({description: 'Gas bill', amount: 1000, createdAt: -1100}))
store.dispatch(addExpense({description: 'Rent', amount: 109500, createdAt: 0}))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
  <Provider store={store} >
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))