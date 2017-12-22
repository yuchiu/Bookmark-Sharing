import React from 'react'
import {Admin, Profiles,Bookmarks} from '../containers/'

class Home extends React.Component {

  render() {
    return (
      <div>
        Bookmark Sharing
        <Admin/>
        <Bookmarks/>
        <Profiles/>
      </div>
    )
  }
}

export default Home;
