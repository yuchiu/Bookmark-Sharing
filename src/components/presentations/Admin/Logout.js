import React from 'react'

class Logout extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.onLogout()
  }
  render() {
    return (
      <div> <button onClick={this.logout.bind(this)}>Logout</button>
      </div>
    )
  }
}


export default Logout