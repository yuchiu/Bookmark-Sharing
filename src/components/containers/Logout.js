import React from 'react'
import {API} from '../../utils'

class Logout extends React.Component {
    constructor(){
        super()
        this.state={
            currentUser: false
        }
    }
  componentDidMount() {
      console.log('dasdsdasad')
    API.get('account/currentuser', null, (err, response) => {
        console.log('dadasads'+JSON.stringify(response.profile))
      if (err) {
        alert(err)
        return
      }
      if (response.profile == null) {
        this.setState({currentUser: false})
      }
      if (response.profile != null) {
        //user is logged in
        this.setState({currentUser: true})
      }
    })
  }
  logout(e) {
    e.preventDefault();
    API.get('account/logout', null, (err, response) => {
      if (err) {
        let msg = err.message || err
        alert(msg)
        return
      }
    })
  }
  render() {
    return (
      <div>
        {this.state.currentUser && <button onClick={this.logout.bind(this)}>Logout</button>}
      </div>
    )
  }
}

export default Logout