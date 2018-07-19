import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

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
  <div>404! - <Link to="/">Go home</Link></div>
)

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to='/' activeClassName="is-active" exact="true">Home</NavLink>
    <NavLink to='/create' activeClassName="is-active">Create an Expense</NavLink>
    <NavLink to='/edit' activeClassName="is-active">Edit an Expense</NavLink>
    <NavLink to='/help' activeClassName="is-active">Help Page</NavLink>
  </header>
)

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
      <Route path='/' component={ExpenseDashboardPage} exact={true}/>
      <Route path='/create' component={AddExpensePage} />
      <Route path='/edit' component={EditPage} />
      <Route path='/help' component={HelpPage} />
      <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)
  
ReactDOM.render(routes, document.getElementById('app'))