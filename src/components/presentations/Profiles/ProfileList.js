import React from 'react'
import Profile from './Profile'

class ProfileList extends React.Component {
  select(profile, e){
    e.preventDefault()
    this.props.onSelect(profile)
  }
  render() {
    return (
      <ul>
        {this
          .props
          .profileList
          .map((profile, i) => {
            let name = null
            if (this.props.selectedProfile == null) {
              name = <a
                href="#"
                onClick={this
                .select
                .bind(this, profile)}>{profile.firstName}</a>
            } else if (this.props.selectedProfile.id == profile.id) {
              name = <a
                href="#"
                onClick={this
                .select
                .bind(this, profile)}>
                <strong>{profile.firstName}</strong>
              </a>
            } else {
              name = <a
                href="#"
                onClick={this
                .select
                .bind(this, profile)}>{profile.firstName}</a>
            }
            return (
              <Profile key={profile.id} name={name}/>
            )
          })}
      </ul>
    )
  }
}

export default ProfileList