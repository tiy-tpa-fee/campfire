import React, { Component } from 'react'

// onClick submit sends ajax request to JSON
export default class Submit extends Component {
  constructor () {
    super()
    // this.state = {
    //   value: '',
    //   tag: ''
    // }

    // this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleChange (e) {
  //   this.setState({value: e.target.value})
  // }

  handleSubmit (e) {
    const data = {
      url: this.refs.url.value,
      primary_tag: this.refs.primaryTag.value,
      tag_list: this.refs.tagList.value,
      description: this.refs.description.value
    }
    console.log(data)
    e.preventDefault()
  }

  render () {
    return <main className='submitMain'>
      <h2>Submit</h2>
      <form className='submitForm' onSubmit={this.handleSubmit}>
        <label>
          Link:
          <input type='text' className='submitLink' placeholder='http://...' ref='url' />
        </label>

        <label>
          Tag:
          <select className='tagSelector' ref='primaryTag'>
            <option value='FrontEnd'>Front End</option>
            <option value='BackEnd'>Back End</option>
          </select>
        </label>

        <input type='text' className='otherTags' placeholder='Other tags' ref='tagList' />

        <textarea className='submitComment' rows='10' cols='30' placeholder='Comments' ref='description' />

        <button type='submit' value='Submit'>Submit</button>
      </form>
    </main>
  }
}
