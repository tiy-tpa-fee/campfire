import React, { Component } from 'react'
import { Link } from 'react-router'
import API from '../utils/API'

export default class Navbar extends Component {

  static PropTypes = {
  }

  constructor () {
    super()
    this.state = {
      visible: false,
      categories: []
    }
  }

  componentDidMount () {
    API.get('/tags?primary=true').then(tags => this.setState({ categories: tags }))
  }

  toggle () {
    this.setState({ visible: !this.state.visible })
  }

  render () {
    const categories = this.state.categories.map((category, i) => {
      return <li>
        <Link className='category-nav' to={'/c/' + category.name}>
          {category.name.toUpperCase()}
        </Link>
      </li>
    })

    return <div className='navBar'>
      <nav className={this.state.visible ? '' : 'hidden'}>
        <ul>
          <li><button onClick={() => this.toggle()}>x</button></li>
          <li><input type='text' name='search' placeholder='Search..' /><img src='http://uploads.webflow.com/55cf187a8cacc9ab28d524b9/55d243680a3ebde1455ffab4_transparency.png' width='15' /></li>
          <li><Link className='home-nav' to='/'>Home</Link></li>
          {categories}
        </ul>
      </nav>
      <button className='menu' onClick={() => this.toggle()}>MENU</button>
    </div>
  }
}
