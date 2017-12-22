import React from 'react'
import {API} from '../../../utils'

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