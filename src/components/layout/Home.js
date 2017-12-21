import React from 'react'
import Profiles from '../containers/Profiles'
import Register from '../containers/Register'
import Login from '../containers/Login'
import Logout from '../containers/Logout'

class Home extends React.Component {

  render() {
    return (
      <div>
        Bookmark Sharing
        <Profiles/>
        <Register/>
        <Login/>
        <Logout/>
      </div>
    )
  }
}

export default Home;
