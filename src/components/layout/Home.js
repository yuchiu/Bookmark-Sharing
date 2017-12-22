import React from 'react'
import {Admin, Profiles} from '../containers/'

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
