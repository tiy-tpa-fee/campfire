import React, { Component } from 'react'

// onClick submit sends ajax request to JSON
export default class Submit extends Component {

  render () {
    return <main className='submitMain'>
      <h2>Submit</h2>
      <form className='submitForm'>
        <input type='text' className='submitLink' defaultValue='http://...' />
        <h5>Tag</h5>
        <select className='tagSelector'>
          <optgroup>
            <option>Front End</option>
            <option>Back End</option>
          </optgroup>
        </select>
        <input type='text' className='otherTags' defaultValue='Tags' />
        <textarea className='submitComment' rows='10' cols='30' defaultValue='Comments' />
        <button type='submit' value='Submit'>Submit</button>
      </form>
    </main>
  }
}
