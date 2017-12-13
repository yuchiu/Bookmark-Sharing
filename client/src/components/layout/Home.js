import React from 'react'
import Profiles from '../containers/Profiles'
import Register from '../containers/Register'
import SignIn from '../presentations/SignIn'
import CreateBookmark from '../presentations/CreateBookmark'

class Home extends React.Component {

  render() {
    return (
      <div>
        Bookmark Sharing
        <Profiles/>
        <Register/>
        <SignIn/>
        <CreateBookmark/>
      </div>
    )
  }
}

export default Home;
