import React from 'react'
import {NavBar, Profiles, Bookmarks} from '../containers/'

class Home extends React.Component {

  render() {
    return (
      <div>
        <NavBar/>
        <div className="row">
          <div className="col-md-2 ml-1">
          <Profiles/>
        </div>
          <div className="col-md-9 ">
          <Bookmarks/>
        </div>
        </div>
      </div>
    )
  }
}

export default Home;
