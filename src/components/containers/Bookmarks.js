import React from 'react'
import {API} from '../../utils'
import actions from '../../actions'
import {connect} from 'react-redux'
import {Title, SubmitBookmark, BookmarkList} from '../presentations/Bookmarks'

class Bookmarks extends React.Component {
  componentDidMount() {
    API.get('/api/bookmark', null, (err, response) => {
      if (err) {
        return
      }
      this
        .props
        .fetchBookmarks(response.results)
    })
  }
  onSubmitLink(bookmark) {
    API.post('api/bookmark', bookmark, (err, res) => {
      if (err) {
        alert(JSON.stringify(err))
        return
      }
      this
        .props
        .createBookmark(res.result)
    })
  }
  render() {
    return (
      <div id="bookmarks-container">
        {(this.props.currentUser == null)
          ? <Title title="Sign in to share Bookmark."/>
          : <div>
            <SubmitBookmark
              currentUser={this.props.currentUser}
              onSubmitLink={this
              .onSubmitLink
              .bind(this)}/>
          </div>}
        {(this.props.selectedProfile == null)
          ? <div>
          <Title title="Bookmarks Shared By Users"/> 
          <BookmarkList bookmarkList={this.props.allBookmarks}/>
          </div>
          : <div>
            <strong>{this.props.selectedProfile.firstName}'s Bookmark List:</strong>
            <BookmarkList bookmarkList={this.props.selectedUserBookmarks}/>
          </div>}
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {currentUser: state.accountReducer.currentUser, allBookmarks: state.bookmarkReducer.allBookmarks, selectedProfile: state.profileReducer.selectedProfile, selectedUserBookmarks: state.bookmarkReducer.selectedUserBookmarks}
}

const dispatchToProps = (dispatch) => {
  return {
    fetchBookmarks: (bookmarks) => {
      dispatch(actions.fetchBookmarks(bookmarks))
    },
    createBookmark: (bookmark) => {
      dispatch(actions.createBookmark(bookmark))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Bookmarks)