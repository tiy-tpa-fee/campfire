import React, { Component } from 'react'
import Trending from './Trending'
import StaffPicks from './StaffPicks'

export default class Category extends Component {

  render () {
    return (
      <div>
        <h1>Category</h1>
        <div>
          <Trending />
        </div>
        <div>
          <StaffPicks />
        </div>
      </div>
    )
  }
}
