import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import PrivateRoute from './PrivateRout'
import Home from '../pages/Home'
import News from '../pages/News'
import Profile from '../pages/Profile'
import Registration from '../pages/Registration'

export default ({ isAuth }) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/news" component={News} />
    <PrivateRoute
      path="/profile"
      isAuth={isAuth}
      component={Profile}
      redirect="/"
    />
    <PrivateRoute
      path="/registration"
      isAuth={!isAuth}
      component={Registration}
      redirect="/profile"
    />
    <Route component={NotFound} />
  </Switch>
)
