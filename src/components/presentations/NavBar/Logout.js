import React from 'react'

class Logout extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.onLogout()
  }
  render() {
    return (
      <div> <button className="btn btn-outline-warning navbar-right-item" onClick={this.logout.bind(this)}>Logout</button>
      </div>
    )
  }
}


export default Logout