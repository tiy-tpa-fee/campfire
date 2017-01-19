import React, { Component } from 'react'

export default class StaffPicks extends Component {

  render () {
    return (

      <div className='staff-picks'>
        <h1>Staff Picks</h1>
        <ul>
          <li>
            <a href='https://github.com/tiy-tpa-fee/campfire'>
              <img src='http://i.imgur.com/R57UyhD.png' width='100%' />
            </a>
            <div className='abstract'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
              <aside>[upvotes, username, timestamp, login to comment]</aside>
              <button>Read More.</button>
            </div>
          </li>
          <li>
            <a href='https://github.com/tiy-tpa-fee/campfire'>
              <img src='http://i.imgur.com/uHTNkOp.png' width='100%' />
            </a>
            <div className='abstract'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
              <aside>[upvotes, username, timestamp, login to comment]</aside>
              <button>Read More.</button>
            </div>
          </li>
          <li>
            <a href='https://github.com/tiy-tpa-fee/campfire'>
              <img src='http://i.imgur.com/baBL0H5.png' width='100%' />
            </a>
            <div className='abstract'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
              <aside>[upvotes, username, timestamp, login to comment]</aside>
              <button>Read More.</button>
            </div>
          </li>
          <li>
            <a href='https://github.com/tiy-tpa-fee/campfire'>
              <img src='http://i.imgur.com/7pNQKAT.png' width='100%' />
            </a>
            <div className='abstract'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
              <aside>[upvotes, username, timestamp, login to comment]</aside>
              <button>Read More.</button>
            </div>
          </li>
          <li>
            <a href='https://github.com/tiy-tpa-fee/campfire'>
              <img src='http://i.imgur.com/jf6Bu5Z.png' width='100%' />
            </a>
            <div className='abstract'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
              <aside>[upvotes, username, timestamp, login to comment]</aside>
              <button>Read More.</button>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
