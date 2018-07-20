import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import PortfolioPage from '../components/PortfolioPage'
import PortfolioDetailPage from '../components/PortfolioDetailPage'
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
      <Route path='/' component={HomePage} exact={true}/>
      <Route path='/portfolio' component={PortfolioPage} exact={true} />
      <Route path='/portfolio/:id' component={PortfolioDetailPage} />
      <Route path='/contact' component={ContactPage} />
      <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter