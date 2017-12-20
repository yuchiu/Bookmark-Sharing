import React from 'react'
import {API} from '../../utils'
import actions from '../../actions'
import {connect} from 'react-redux'

class Register extends React.Component {
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
  register(e) {
    e.preventDefault();
    API.post('account/register', this.state.visitor, (err, response) => {
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
  updateVisitor(e) {
    let newVisitor = Object.assign({}, this.state.visitor)
    newVisitor[e.target.id] = e.target.value
    this.setState({visitor: newVisitor})
  }
  render() {
    const greeting = (this.props.currentUser == null) ? null : <h2>Welcome {this.props.currentUser.firstName}</h2>
    return (
      <div>
        {greeting}
        <h2>Register</h2>
        <input
          type="text"
          id="firstName"
          onChange={this
          .updateVisitor
          .bind(this)}
          value={this.state.visitor.firstName}
          placeholder="first Name"/>
        <input
          type="text"
          id="lastName"
          onChange={this
          .updateVisitor
          .bind(this)}
          value={this.state.visitor.lastName}
          placeholder="last Name"/>
        <input
          type="text"
          id="email"
          onChange={this
          .updateVisitor
          .bind(this)}
          value={this.state.visitor.email}
          placeholder="email"/>
        <input
          type="password"
          id="password"
          onChange={this
          .updateVisitor
          .bind(this)}
          value={this.state.visitor.password}
          placeholder=""/>
        <button onClick={this
          .register
          .bind(this)}>Register</button>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {profileList: state.profileList.profileList,
          currentUser: state.account.currentUser}
}

const dispatchToProps = (dispatch) => {
  return {
    createProfile: (profile) => {
      dispatch(actions.createProfile(profile))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Register)