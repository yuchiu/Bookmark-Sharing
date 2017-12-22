import React from 'react'
import {API} from '../../utils'
import actions from '../../actions'
import {connect} from 'react-redux'

import {Login, Logout, Register, Welcome} from '../presentations/Admin/'

class Admin extends React.Component {
  componentDidMount() {
    API.get('account/currentuser', null, (err, response) => {
      if (err) {
        alert(err)
        return
      }
      if (response.profile == null) {
        return
      }
      if (response.profile != null) {
        this
          .props
          .fetchCurrentUser(response.profile)
      }
    })
  }
  render() {
    return (
      <div>
        {(this.props.currentUser != null)
          ? <div>
              <Welcome firstName={this.props.currentUser.firstName}/>
              <Logout
                currentUser={this.props.currentUser}
                logoutUser={this.props.logoutUser}/>
            </div>

          : <div>
            <Login
              currentUser={this.props.currentUser}
              createProfile={this.props.createProfile}
              fetchCurrentUser={this.props.fetchCurrentUser}/>
            <Register
              currentUser={this.props.currentUser}
              createProfile={this.props.createProfile}
              fetchCurrentUser={this.props.fetchCurrentUser}/>
          </div>
}
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {currentUser: state.account.currentUser}
}

const dispatchToProps = (dispatch) => {
  return {
    createProfile: (profile) => {
      dispatch(actions.createProfile(profile))
    },
    fetchCurrentUser: (profile) => {
      dispatch(actions.fetchCurrentUser(profile))
    },
    logoutUser: () => {
      dispatch(actions.logoutUser())
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Admin)