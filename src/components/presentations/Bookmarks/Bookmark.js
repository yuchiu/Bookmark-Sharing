import React from 'react'
import Bookmark from './Bookmark'

class AllBookmarks extends React.Component {
  render() {
    return (
      <li>
        {this.props.bookmark.title}<br/>
        <img src={this.props.bookmark.image} width="200px"/> {this.props.bookmark.description}
        <a className="btn btn-outline-primary" target="_blank" href={this.props.bookmark.url}>View</a>
      </li>

    )
  }
}

export default AllBookmarks