import React from 'react'
import {API} from '../../utils/'
import actions from '../../actions'
import {connect} from 'react-redux'

class Profiles extends React.Component {
  componentDidMount() {
    API.get('api/profile', null, (err, response) => {
      const results = response.results
      this
        .props
        .fetchProfiles(results)
    })
  }
  render() {
    const profileList = this
      .props
      .profileList
      .map((profile, i) => {
        return (
          <li key={profile.id}>{profile.firstName}</li>
        )
      })
    return (
      <div>
        <h2>Profiles</h2>
        <ol>{profileList}</ol>

      </div>
    )
  }
}

const stateToProps = (state) => {
  return {profileList: state.profileReducer.profileList}
}

const dispatchToProps = (dispatch) => {
  return {
    fetchProfiles: (profiles) => {
      dispatch(actions.fetchProfiles(profiles))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Profiles)