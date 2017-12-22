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
  register(visitor) {
    API.post('account/register', visitor, (err, response) => {
      if (err) {
        let msg = err.message || err
        alert(msg)
        return
      }
      this
        .props
        .createProfile(response.profile)
    })
  }
  login(credentials) {
    API.post('account/login', credentials, (err, response) => {
      if (err) {
        let msg = err.message || err
        alert(msg)
        return
      }
      this
        .props
        .createProfile(response.profile)
    })
  }
  logout() {
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
        {(this.props.currentUser != null)
          ? <div>
              <Welcome firstName={this.props.currentUser.firstName}/>
              <Logout onLogout={this.logout.bind(this)}/>
            </div>

          : <div>
            <Login
              onLogin={this.login.bind(this)}/>
            <Register
            onRegister={this.register.bind(this)}/>
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