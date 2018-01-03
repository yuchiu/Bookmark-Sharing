import React from 'react'

class Welcome extends React.Component {
  render() {
    return (
      <div>
        Welcome, {this.props.firstName}
     </div>
    )
  }
}


export default Welcome