import React from 'react'
import {API} from '../../utils'
import actions from '../../actions'
import {connect} from 'react-redux'
import {Login, Logout, Register, Welcome} from '../presentations/NavBar/'

class NavBar extends React.Component {
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
  onRegister(visitor) {
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
  onLogin(credentials) {
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
  onLogout() {
    API.get('account/logout', null, (err, response) => {
      if (err) {
        let msg = err.message || err
        alert(msg)
        return
      }
      this
        .props
        .logoutUser()
    })

  }
  /* <nav className="navbar navbar-inverse bg-inverse">
  <a id="header-title" href="./">Bookmark Sharing</a>

  </nav>  */
  render() {
    return (

      <nav id="navbar-container"className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="./">Bookmark Sharing</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <div className=" my-2 my-lg-0">
            {this.props.currentUser && <div className="navbar-right">
              <Welcome firstName={this.props.currentUser.firstName}/>
              <Logout onLogout={this
                .onLogout
                .bind(this)}/>
            </div>}

            {!this.props.currentUser && <div className="navbar-right">
              <Login onLogin={this
                .onLogin
                .bind(this)}/>
              <Register
                onRegister={this
                .onRegister
                .bind(this)}/>
            </div>}

          </div>
        </div>
      </nav>

    )
  }
}

const stateToProps = (state) => {
  return {currentUser: state.accountReducer.currentUser}
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

export default connect(stateToProps, dispatchToProps)(NavBar)
