import React from 'react'
import Bookmark from './Bookmark'

class AllBookmarks extends React.Component {
  render() {
    return (
      <li>{this.props.bookmark.title}<br/><img src={this.props.bookmark.image} width="200px"/><br/>{this.props.bookmark.description}</li>

    )
  }
}

export default AllBookmarks