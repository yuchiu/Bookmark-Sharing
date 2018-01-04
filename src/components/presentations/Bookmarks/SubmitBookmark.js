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
      <div id="submit-bookmark-contianer">
        <div className="input-group ">
          <input
            className="form-control"
            onChange={this
            .updateLink
            .bind(this)}
            placeholder="http://www.example.com"
            value={this.state.link}/>

          <span className="input-group-btn">
            <button
              className="btn btn-primary ml-2"
              type="button"
              onClick={this
              .submitLink
              .bind(this)}>Share!</button>
          </span>
        </div>
      </div>
    )
  }
}

export default SubmitBookmark