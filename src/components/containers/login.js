import React from 'react'
import {API} from '../../utils'
import actions from '../../actions'
import {connect} from 'react-redux'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      visitor: {
        'firstName': '',
        'lastName': '',
        'email': '',
        'password': ''
      }
    }
  }
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
        //user is logged in
        console.log(response.profile)
        this
          .props
          .fetchCurrentUser(response.profile)
      }
    })
  }
  login(e) {
    e.preventDefault();
    API.post('account/login', this.state.visitor, (err, response) => {
      if (err) {
        let msg = err.message || err
        alert(msg)
        return
      }
      this
        .props
        .createProfile(response.profile)
      this.setState({
        visitor: {
          'firstName': '',
          'lastName': '',
          'email': '',
          'password': ''
        }
      })
    })
  }
  updateVisitor(attr, e) {
    let newVisitor = Object.assign({}, this.state.visitor)
    newVisitor[attr] = e.target.value
    this.setState({visitor: newVisitor})
  }
  render() {
    return (
      <div>
        {(this.props.currentUser != null)
          ? <h2>Welcome {this.props.currentUser.firstName}</h2>
          : <div>
            <h2>Login</h2>
            <input
              type="text"
              onChange={this
              .updateVisitor
              .bind(this,'email')}
              placeholder="email"/>
            <input
              type="password"
              id="password"
              onChange={this
              .updateVisitor
              .bind(this,'password')}
              placeholder=""/>
            <button onClick={this
              .login
              .bind(this)}>Log In</button>
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
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Login)