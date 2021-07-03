import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './views/Home'

const routesConfig = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
]

const Routes = (): any => (
  <BrowserRouter>
    <Switch>
      {routesConfig.map((route: any, i: number) => (
        <Route path={route.path} component={route.component} key={i} />
      ))}
    </Switch>
  </BrowserRouter>
)

export default Routes