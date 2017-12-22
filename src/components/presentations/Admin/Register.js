import React from 'react'

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
  updateVisitor(attr, e) {
    let newVisitor = Object.assign({}, this.state.visitor)
    newVisitor[attr] = e.target.value
    this.setState({visitor: newVisitor})
  }
  register(e) {
    e.preventDefault();
    this.props.onRegister(this.state.visitor)
    this.setState({
      visitor: {
        'firstName': '',
        'lastName': '',
        'email': '',
        'password': ''
      }
    })
  }
  render() {
    return (
      <div>
        {(this.props.currentUser != null)
          ? <h2>Welcome {this.props.currentUser.firstName}</h2>
          : <div>
            <h2>Register</h2>
            <input
              type="text"
              onChange={this
              .updateVisitor
              .bind(this, 'firstName')}
              value={this.state.visitor.firstName}
              placeholder="first Name"/>
            <input
              type="text"
              onChange={this
              .updateVisitor
              .bind(this, 'lastName')}
              value={this.state.visitor.lastName}
              placeholder="last Name"/>
            <input
              type="text"
              onChange={this
              .updateVisitor
              .bind(this, 'email')}
              value={this.state.visitor.email}
              placeholder="email"/>
            <input
              type="password"
              onChange={this
              .updateVisitor
              .bind(this, 'password')}
              value={this.state.visitor.password}
              placeholder=""/>
            <button onClick={this
              .register
              .bind(this)}>Register</button>
          </div>
}
      </div>
    )
  }
}

export default Register