import React, { Component } from 'react'

export default class Navbar extends Component {

  static PropTypes = {
  }

  constructor () {
    super()
    this.state = {
      visible: false
    }
  }

  toggle () {
    this.setState({ visible: !this.state.visible })
  }

  render () {
    return <div className='navBar'>
      <nav className={this.state.visible ? '' : 'hidden'}>
        <ul>
          <li><button onClick={() => this.toggle()}>x</button></li>
          <li><input type='text' name='search' placeholder='Search..' /><img src='http://uploads.webflow.com/55cf187a8cacc9ab28d524b9/55d243680a3ebde1455ffab4_transparency.png' width='15' /></li>
          <li><button className='home-nav'onClick={(e) => e.preventDefault()}>Home</button></li>
          <li><button className='category-nav' onClick={(e) => e.preventDefault()}>Category</button></li>
          <li><button className='frontend-nav' onClick={(e) => e.preventDefault()}>Front-End</button></li>
          <li><button className='backend-nav' onClick={(e) => e.preventDefault()}>Back-End</button></li>
        </ul>
      </nav>
      <button className='menu' onClick={() => this.toggle()}>MENU</button>
    </div>
  }
}
