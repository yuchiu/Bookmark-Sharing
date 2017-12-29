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
      <div>
        {(this.props.currentUser == null)
          ? <Title title="sign in to share your favorite Bookmark!"/>
          : <div>
            <Title title="Share your favorite Bookmark!"/>
            <SubmitBookmark
              currentUser={this.props.currentUser}
              onSubmitLink={this
              .onSubmitLink
              .bind(this)}/>
          </div>}
        <Title title="Bookmark List"/> 
        {(this.props.selectedProfile == null)
          ? <BookmarkList bookmarkList={this.props.allBookmarks}/>
          : <div>
            {this.props.selectedProfile.firstName}
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