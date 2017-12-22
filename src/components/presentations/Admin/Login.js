import React from 'react'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      visitor: {
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
  login(e) {
    e.preventDefault();
    this
      .props
      .onLogin(this.state.visitor)
  }
  render() {
    return (
      <div>
        {!this.props.currentUser && <div>
          <h2>Login</h2>
          <input
            type="text"
            onChange={this
            .updateVisitor
            .bind(this, 'email')}
            placeholder="email"/>
          <input
            type="password"
            id="password"
            onChange={this
            .updateVisitor
            .bind(this, 'password')}
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

export default Login