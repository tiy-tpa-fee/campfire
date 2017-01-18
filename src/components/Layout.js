import React, { Component, PropTypes as T } from 'react'
import { SignInButton } from '.'

export default class Home extends Component {

  static propTypes = {
    children: T.element
  }

  render () {
    return <div className='layout'>
      <header className='top-bar'>
        <button className='nav-button' />
        <h1>Campfire</h1>
        <SignInButton />
      </header>
      <main>{this.props.children}</main>
      <footer>
        Made with &hearts; at The Iron Yard.
      </footer>
    </div>
  }
}
