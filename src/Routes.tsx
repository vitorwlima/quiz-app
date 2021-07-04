import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Quiz } from './views'

const routesConfig = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/quiz/:amount/:category/:difficulty',
    component: Quiz,
  },
]

const Routes = (): any => (
  <BrowserRouter>
    <Switch>
      {routesConfig.map((route: any, i: number) => (
        <Route
          path={route.path}
          component={route.component}
          key={i}
          exact={route.exact}
        />
      ))}
    </Switch>
  </BrowserRouter>
)

export default Routes
