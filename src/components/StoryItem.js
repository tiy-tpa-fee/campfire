import React, { Component } from 'react'

class StoryItem extends Component {

  // static propTypes = {
  //   Story: React.PropTypes.string.isRequired,
  //   Description: React.PropTypes.string.isRequired,
  //   date: React.PropTypes.string.isRequired,
  //   img: React.PropTypes.string.isRequired,
  //   trending: React.PropTypes.string.isRequired,
  //   blog: React.PropTypes.string.isRequired
  // }
  // constructor () {
  //   super()
  //   this.state = {
  //     Story: '',
  //     Description: '',
  //     date: '',
  //     img: '',
  //     blog: []
  //   }
  // }
  constructor () {
    super()
    this.state = {
      story: {
        img: ('https://video-images.vice.com/articles/587925e80df59c45d41c8917/lede/1484714362253-vicestormclouds2.jpeg?crop=1xw:0.784xh;0xw,0.1367xh&resize=1440'),
        description: 'New York in 2050 Will Be Wetter, Warmer, and More Dangerous',
        bold: 'New Yorkers Should Prepare for Heat Wave',
        story: ('https://www.vice.com/en_us/article/new-york-in-2050-will-be-wetter-warmer-and-more-dangerous'),
        date: 'Jan 18 2017',
        blog: ('https://medium.com/me/stories/public'),
        trending: 'jumanji'
      }

    }
  }

  render () {
    return <div className='StoryItems'>
      <ul>
        <li><img src={this.state.story.img} alt='newyork' height='500px' width='500px' /></li>
        <li>{this.state.story.description} </li>
        <li><a href={this.state.story.story} /></li>
        <li>{this.state.story.date}</li>
        <li>{this.state.story.bold}</li>
        <li><a href={this.state.story.blog} /></li>
        <li>{this.state.story.trending}</li>
      </ul>
    </div>
  }
}

export default StoryItem
// if im importing from another component and it doesnt have props use jsx syntax not {}
