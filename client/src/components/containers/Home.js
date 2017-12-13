import React from 'react'
import Register from '../presentations/Register'
import SignIn from '../presentations/SignIn'
import CreateBookmark from '../presentations/CreateBookmark'

class Home extends React.Component {

  render() {
    return (
      <div>
        My React Boilerplate
        <Register/>
        <SignIn/>
        <CreateBookmark/>
      </div>
    )
  }
}

export default Home;
