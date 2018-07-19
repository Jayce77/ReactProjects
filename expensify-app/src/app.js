import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
  <div> This is from the dashboard </div>
)

const AddExpensePage = () => (
  <div> This is from the add AddExpensePage </div>
)

const EditPage = () => (
  <div> This is from the Edit Page </div>
)

const HelpPage = () => (
  <div> This is from the HelpPage </div>
)

const NotFoundPage = () => (
  <div>404!</div>
)

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ExpenseDashboardPage} exact={true}/>
      <Route path='/create' component={AddExpensePage} />
      <Route path='/edit' component={EditPage} />
      <Route path='/help' component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)
  
ReactDOM.render(routes, document.getElementById('app'))