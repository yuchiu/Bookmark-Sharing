import React from 'react'

class Register extends React.Component {

  handleClick() {
    console.log('dasdsa')
  }
  render() {
    return (
      <div>
        <h2>Register</h2>
        <input type="text" name="firstName" placeholder="first Name"/>
        <input type="text" name="lastName" placeholder="last Name"/>
        <input type="text" name="email" placeholder="email"/>
        <input type="password" name="password" placeholder=""/>
        <button onClick={this
          .handleClick
          .bind(this)}>Register</button>
      </div>
    )
  }
}

export default Register;