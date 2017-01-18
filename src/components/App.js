import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Home, Layout, Submit } from '.'
import { auth } from '../utils/AuthService'

export default class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='submit' component={Submit} onEnter={auth.required} />
      </Route>
    </Router>
  }
}
