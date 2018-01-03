import React from 'react'
import {API} from '../../utils/'
import actions from '../../actions'
import {connect} from 'react-redux'
import {Title, ProfileList} from '../presentations/Profiles/'

class Profiles extends React.Component {
  componentDidMount() {
    API.get('api/profile', null, (err, response) => {
      const results = response.results
      this
        .props
        .fetchProfiles(results)
    })
  }
  onSelect(profile) {
    this
      .props
      .selectProfile(profile)
    const params = {
      profile: profile.id
    }
    API.get('/api/bookmark', params, (err, response) => {
      if (err) {
        return
      }
      this
        .props
        .fetchUserBookmark(response.results)
    })
  }
  render() {
    return (
      <div id="profiles-container">
        <Title/>
        <ProfileList 
        profileList={this.props.profileList} 
        selectedProfile={this.props.selectedProfile}
        onSelect={this.onSelect.bind(this)}/>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {profileList: state.profileReducer.profileList, selectedProfile: state.profileReducer.selectedProfile}
}

const dispatchToProps = (dispatch) => {
  return {
    fetchProfiles: (profiles) => {
      dispatch(actions.fetchProfiles(profiles))
    },
    selectProfile: (profile) => {
      dispatch(actions.selectProfile(profile))
    },
    fetchUserBookmark: (userBookmark) => {
      dispatch(actions.fetchUserBookmark(userBookmark))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Profiles)