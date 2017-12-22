import React from 'react'
import {API} from '../../utils'
import actions from '../../actions'
import {connect} from 'react-redux'

class Logout extends React.Component {
  logout(e) {
    e.preventDefault();
    API.get('account/logout', null, (err, response) => {
      if (err) {
        let msg = err.message || err
        alert(msg)
        return
      }
      this.props.logoutUser()
    })

  }
  render() {
    return (
      <div>
        {this.props.currentUser && <button onClick={this.logout.bind(this)}>Logout</button>}
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {currentUser: state.account.currentUser}
}

const dispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(actions.logoutUser())
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Logout)