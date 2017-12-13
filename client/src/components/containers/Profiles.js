import React from 'react'
import {API} from '../../utils/'

class Profiles extends React.Component {

  constructor() {
    super()
    this.state = {
      profiles: []
    }
  }
  componentDidMount() {
    API.get('api/profile', null, (err, response) => {
      console.log(response)
      this.setState({profiles: response.results})
    })
  }
  render() {
    const list = this
      .state
      .profiles
      .map((profile, i) => {
        return (
          <li key={profile.id}>{profile.firstName}</li>
        )
      })
    return (
      <div>
        <h2>Profiles</h2>
        <ol>{list}</ol>

      </div>
    )
  }
}

export default Profiles