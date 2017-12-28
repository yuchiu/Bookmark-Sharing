import React from 'react'
import {Admin, Profiles,Bookmarks} from '../containers/'

class Home extends React.Component {

  render() {
    return (
      <div>
        Bookmark Sharing
        <Admin/>
        <Profiles/>
        <Bookmarks/>
      </div>
    )
  }
}

export default Home;
