import React, { Component } from 'react'
import Trending from './Trending'
import StaffPicks from './StaffPicks'

export default class Category extends Component {

  render () {
    return (
      <div className='category'>
        <h1>Category</h1>
        <div className='top-box-cat'>
          <div className='trending'>
            <Trending />
          </div>
          <div className='staff-pick'>
            <StaffPicks />
          </div>
        </div>
      </div>
    )
  }
}
