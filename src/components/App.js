import React, { Component, PropTypes as T } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Home, Layout, Submit, SearchResults, Category } from '.'
import { auth } from '../utils/AuthService'

export default class App extends Component {

  static propTypes = {
    route: T.object
  }

  constructor (props) {
    super(props)

    // Trigger a re-render when the auth state has changed.
    auth.onUpdate = () => this.forceUpdate()
  }

  render () {
    return <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='search' component={SearchResults} />
        <Route path='submit' component={Submit} onEnter={auth.required} />
        <Route path='c/:tag' component={Category} />
      </Route>
    </Router>
  }
}
