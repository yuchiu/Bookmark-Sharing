import React from 'react'
import Profiles from '../containers/Profiles'
import Register from '../containers/Register'
import Login from '../containers/Login'

class Home extends React.Component {

  render() {
    return (
      <div>
        Bookmark Sharing
        <Profiles/>
        <Register/>
        <Login/>
      </div>
    )
  }
}

export default Home;
