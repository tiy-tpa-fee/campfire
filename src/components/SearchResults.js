import React, { Component } from 'react'

class SearchResults extends Component {

  static propTypes = {
    image: '...',
    description: '...'
  }

  render () {
    return <div>
      <h2>Search Results</h2>
      <ul className='searchResultsList'>
        {/* <li>
          <th className='search-image'>{this.props.image}</th>
          <td className='search-description'>{this.props.description}</td>
        </li> */}
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  }
}

export default SearchResults
