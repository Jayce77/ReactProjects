import { createStore, combineReducers } from 'redux'
import expensesReducer from '../reducers/expenseReducer'
import filtersReducer from '../reducers/filterReducer'

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }), /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}