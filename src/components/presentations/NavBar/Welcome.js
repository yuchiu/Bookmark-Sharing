import React from 'react'

class Welcome extends React.Component {
  render() {
    return (
      <div id="welcome-message"className="navbar-right-item">
        Welcome, {this.props.firstName}
     </div>
    )
  }
}


export default Welcome