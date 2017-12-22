import React from 'react'
import Profiles from '../containers/Profiles'
import Admin from '../containers/Admin'

class Home extends React.Component {

  render() {
    return (
      <div>
        Bookmark Sharing
        <Profiles/>
        <Admin/>
      </div>
    )
  }
}

export default Home;
