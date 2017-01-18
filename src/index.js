import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

import './styles/screen.scss'

const root = document.getElementById('root')

const render = (app) => {
  ReactDOM.render(
    <AppContainer>{app}</AppContainer>,
    root
  )
}

render(<App />)

if (module.hot) {
  const log = console.error
  console.error = (...args) => { // eslint-disable-line no-console
    if (!(args && args.length === 1 && typeof args[0] === 'string' && args[0].indexOf('You cannot change <Router routes>') > -1)) {
      log.apply(console, args)
    }
  }

  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(<NextApp />)
  })
}
