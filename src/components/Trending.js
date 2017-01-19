import React, { Component } from 'react'

export default class Trending extends Component {

  render () {
    return (

      <div className='trending'>
        <h2>TRENDING</h2>
        <div className='trending-main'>
          <img src='http://i.imgur.com/YxNBH96.png' alt='image of a car' />
          <div>
            <time>Date</time>
            <h2>Post Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima soluta officiis et, doloribus, modi dolores nulla nesciunt doloremque maiores quisquam recusandae esse quam repudiandae quas ipsum eius ratione architecto culpa!</p>
            <p>[upvotes, username, timestamp, login to comment]</p>
          </div>
        </div>
        <div className='trending-sub'>
          <img src='http://i.imgur.com/peSY1P2.png' alt='image of Js' />
          <div>
            <time>Date</time>
            <h3>Post Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima soluta officiis et, doloribus</p>
            <p>[upvotes, username, timestamp, login to comment]</p>
          </div>
        </div>

      </div>
    )
  }
}
