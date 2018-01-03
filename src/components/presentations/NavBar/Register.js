import React from 'react'
import Modal from 'react-modal';
import {FormControl} from 'react-bootstrap';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visitor: {
        modalIsOpen: false,
        'firstName': '',
        'lastName': '',
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
  register(e) {
    e.preventDefault();
    this
      .props
      .onRegister(this.state.visitor)
    this.setState({
      visitor: {
        'firstName': '',
        'lastName': '',
        'email': '',
        'password': ''
      }
    })
  }
  render() {
    return (
      <div>
        {(this.props.currentUser != null)
          ? <h2>Welcome {this.props.currentUser.firstName}</h2>
          : <div>
            <button className="btn btn-outline-success " onClick={this.openModal}>
              Register
            </button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel='edit Recipe'
              style={styles}>
              <h2>Register</h2>
              <input
                type="text"
                onChange={this
                .updateVisitor
                .bind(this, 'firstName')}
                value={this.state.visitor.firstName}
                placeholder="first Name"/>
              <input
                type="text"
                onChange={this
                .updateVisitor
                .bind(this, 'lastName')}
                value={this.state.visitor.lastName}
                placeholder="last Name"/>
              <input
                type="text"
                onChange={this
                .updateVisitor
                .bind(this, 'email')}
                value={this.state.visitor.email}
                placeholder="email"/>
              <input
                type="password"
                onChange={this
                .updateVisitor
                .bind(this, 'password')}
                value={this.state.visitor.password}
                placeholder=""/>
              <button onClick={this
                .register
                .bind(this)}>Register</button>
            </Modal>
          </div>
}
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
export default Register