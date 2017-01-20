import React, { Component } from 'react'
import API from '../utils/API'

// onClick submit sends ajax request to JSON
export default class Submit extends Component {
  constructor () {
    super()
    this.state = {
      categories: []
    }

    // this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleChange (e) {
  //   this.setState({value: e.target.value})
  // }
  componentDidMount () {
    API.get('/tags?primary=true').then((data) => {
      this.setState({categories: data})
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const data = {
      story: {
        url: this.refs.url.value,
        primary_tag: this.refs.primaryTag.value,
        tag_list: this.refs.tagList.value,
        description: this.refs.description.value
      }
    }
    API.post('/stories', data).then((story) => {
      console.log(story)
    })
  }

  render () {
    const options = this.state.categories.map((category, i) => {
      return <option key={i} value={category.name}>{category.name}</option>
    })
    return <main className='submitMain'>
      <h1>Submit</h1>
      <form className='submitForm' onSubmit={this.handleSubmit}>

        <label className='submitLabel'>
          Link:
          <input type='text' className='submitLink' placeholder='http://...' ref='url' />
        </label>

        <label className='submitLabel'>
          Primary tag:
          <select className='tagSelector' ref='primaryTag'>
            {options}
          </select>
        </label>

        <label className='submitLabel'>
          Other tags:
          <input type='text' className='otherTags' placeholder='tags...' ref='tagList' />
        </label>

        <textarea className='submitComment' rows='10' cols='35' placeholder='Comments' ref='description' />

        <button type='submit' value='Submit' className='submitButton'>Submit</button>
      </form>
    </main>
  }
}
