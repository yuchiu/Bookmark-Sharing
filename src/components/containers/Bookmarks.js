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
  updateLink(e) {
    e.preventDefault()
    this.setState({link: e.target.value})
  }
  submitLink(e) {
    e.preventDefault()
    const bookmark = {
      profile: this.props.currentUser,
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
          Bookmarks List
        </div>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {currentUser: state.account.currentUser}
}

const dispatchToProps = (dispatch) => {
  return {}
}

export default connect(stateToProps, dispatchToProps)(Bookmarks)