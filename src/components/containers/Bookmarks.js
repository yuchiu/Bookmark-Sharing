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
  componentDidMount(){
    API.get('/api/bookmark', null, (err, response)=>{
      if(err){
        return
      }
      this.props.fetchBookmarks(response.results)
      console.log('Bookmarks: '+ JSON.stringify(this.props.bookmarks))
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
      console.log('submit link ' + JSON.stringify(res))
    })

    this.setState({link: ""})
  }
  render() {
    return (
      <div>
        {this.props.currentUser == null && <h3>Sign in to save your bookmark and share your favorite post!</h3>}
        {this.props.currentUser != null && <div>
          <input
            onChange={this
            .updateLink
            .bind(this)}
            placeholder="http://www.example.com"/>
          <button onClick={this
            .submitLink
            .bind(this)}>Submit Link</button>
        </div>}
        <div>
          <h2>Bookmarks List:</h2>
          <ol>
            {
              this.props.bookmarks.map((bookmark, i)=>{
                return  <li key={bookmark.id}>{bookmark.title}<br/>{bookmark.description}</li>
                
              })
            }
            </ol>
        </div>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {currentUser: state.accountReducer.currentUser,
          bookmarks: state.bookmarkReducer.bookmarks
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchBookmarks:(bookmarks)=>{
      dispatch(actions.fetchBookmarks(bookmarks))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Bookmarks)