import React from 'react'
import Bookmark from './Bookmark'

class BookmarkList extends React.Component {
  render() {
    return (
      <ul id="bookmark-list">
        {this
          .props
          .bookmarkList
          .map((bookmark, i) => {
            return <Bookmark key={bookmark.id} bookmark={bookmark}/>
          })
}
      </ul>
    )
  }
}

export default BookmarkList