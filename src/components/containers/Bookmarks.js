import React from 'react'
import {API} from '../../utils'
import actions from '../../actions'
import {connect} from 'react-redux'

class Bookmarks extends React.Component {
  constructor() {
    super()
    this.state = {
      link: ""
    }
  }
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
  updateLink(e) {
    e.preventDefault()
    this.setState({link: e.target.value})
  }
  submitLink(e) {
    e.preventDefault()
    const bookmark = {
      profile: this.props.currentUser.id,
      url: this.state.link
    }
    API.post('api/bookmark', bookmark, (err, res) => {
      if (err) {
        alert(JSON.stringify(err))
        return
      }
      console.log('created bookmark : '+JSON.stringify(res))
      this
        .props
        .createBookmark(res.result)
    })

    this.setState({link: ""})
  }
  render() {
    return (
      <div>
        {(this.props.currentUser == null)
          ? <h3>Sign in to save your bookmark and share your favorite post!</h3>
          : <div>
            <h3>Share your favorite bookmark!</h3>
            <input
              onChange={this
              .updateLink
              .bind(this)}
              placeholder="http://www.example.com"/>
            <button onClick={this
              .submitLink
              .bind(this)}>Submit Link</button>
          </div>}
        <h2>Bookmarks List:</h2>
        {(this.props.selectedProfile == null)
          ? <div>
              <ol>
                {this
                  .props
                  .allBookmarks
                  .map((bookmark, i) => {
                    return <li key={bookmark.id}>{bookmark.title}<br/><img src={bookmark.image} width="200px"/><br/>{bookmark.description}</li>

                  })
}
              </ol>
            </div>
          : <div>
            {this.props.selectedProfile.firstName}
            <ol>
              {this
                .props
                .selectedUserBookmark
                .map((bookmark, i) => {
                  return <li key={bookmark.id}>{bookmark.title}<br/><img src={bookmark.image} width="200px"/><br/>{bookmark.description}</li>
                })}
            </ol>
          </div>}
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {currentUser: state.accountReducer.currentUser, allBookmarks: state.bookmarkReducer.allBookmarks, selectedProfile: state.profileReducer.selectedProfile, selectedUserBookmark: state.bookmarkReducer.selectedUserBookmark}
}

const dispatchToProps = (dispatch) => {
  return {
    fetchBookmarks: (bookmarks) => {
      dispatch(actions.fetchBookmarks(bookmarks))
    },
    createBookmark: (bookmark)=>{
      dispatch(actions.createBookmark(bookmark))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Bookmarks)