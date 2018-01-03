import React from 'react'
import Modal from 'react-modal';
import {FormControl} from 'react-bootstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      visitor: {
        'email': '',
        'password': ''
      }
    }
    this.openModal = this
      .openModal
      .bind(this);
    this.closeModal = this
      .closeModal
      .bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  updateVisitor(attr, e) {
    let newVisitor = Object.assign({}, this.state.visitor)
    newVisitor[attr] = e.target.value
    this.setState({visitor: newVisitor})
  }
  login(e) {
    e.preventDefault();
    this
      .props
      .onLogin(this.state.visitor)
  }
  render() {
    return (
      <div>
        {!this.props.currentUser && <button  type="button" className="btn btn-outline-info " onClick={this.openModal}>
          Login
        </button>
}
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel='edit Recipe'
          style={styles}>
          <div>
            <h2>Login</h2>
            <input
              type="text"
              onChange={this
              .updateVisitor
              .bind(this, 'email')}
              placeholder="email"/>
            <input
              type="password"
              id="password"
              onChange={this
              .updateVisitor
              .bind(this, 'password')}
              placeholder=""/>
            <button onClick={this
              .login
              .bind(this)}>Log In</button>
          </div>
        </Modal>
      </div>
    )
  }
}

const styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: 550,
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden'
  }
}
export default Login