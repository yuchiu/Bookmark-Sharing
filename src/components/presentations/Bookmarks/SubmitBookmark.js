import React from 'react'

class SubmitBookmark extends React.Component {
  constructor() {
    super()
    this.state = {
      link: ""
    }
  }
  updateLink(e) {
    e.preventDefault()
    this.setState({link: e.target.value})
  }
  submitLink(e) {
    e.preventDefault()
    const bookmark = {
      profile: this.props.currentUser.id,
      url: this.state.link
    }
    this
      .props
      .onSubmitLink(bookmark)
    this.setState({link: ""})
  }
  render() {
    return (
      <div><input
        onChange={this
        .updateLink
        .bind(this)}
        placeholder="http://www.example.com"
        value={this.state.link}/>

        <button className="btn btn-primary ml-2" onClick={this
          .submitLink
          .bind(this)}>Share</button>
      </div>
    )
  }
}

export default SubmitBookmark