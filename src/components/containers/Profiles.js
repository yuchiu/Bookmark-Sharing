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
  select(profile, e){
    event.preventDefault(e)
    this.props.selectProfile(profile)
    const params = {profile:profile.id}
    API.get('/api/bookmark', params, (err, response) => {
      if (err) {
        return
      }
      this.props.fetchUserBookmark(response.results)
    })
  }
  render() {
    const profileList = this
      .props
      .profileList
      .map((profile, i) => {
        let name = null
        if (this.props.selectedProfile == null) {
          name = <a href="#" onClick={this.select.bind(this, profile)}>{profile.firstName}</a>
        } else if (this.props.selectedProfile.id == profile.id) {
          name = <a href="#" onClick={this.select.bind(this, profile)}><strong>{profile.firstName}</strong></a>
        } else {
          name = <a href="#" onClick={this.select.bind(this, profile)}>{profile.firstName}</a>
        }
        return (
          <li key={profile.id}>{name}</li>
        )
      })
    return (
      <div>
        <h2>Profiles</h2>
        <ul>{profileList}</ul>

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
    selectProfile:(profile)=>{
      dispatch(actions.selectProfile(profile))
    },
    fetchUserBookmark: (userBookmark)=>{
      dispatch(actions.fetchUserBookmark(userBookmark))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Profiles)