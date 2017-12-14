import React from 'react'
import {API} from '../../utils'

class Register extends React.Component {
  constructor(){
    super()
    this.state={
      visitor:{
        'firstName':'',
        'lastName':'',
        'email':'',
        'password':'',
      }
    }
  }
  register(e) {
    e.preventDefault();
    API.post('api/profile', this.state.visitor, (err,response)=>{
      if(err){
        let msg = err.message||err
        alert(msg)
        return
      }
      console.log(JSON.stringify(response))
    })
  }
  updateVisitor(e){
    let newVisitor = Object.assign({}, this.state.visitor)
    newVisitor[e.target.id] = e.target.value
    this.setState({
      visitor:newVisitor
    })
  }
  render() {
    return (
      <div>
        <h2>Register</h2>
        <input type="text" id="firstName" onChange={this.updateVisitor.bind(this)} placeholder="first Name"/>
        <input type="text" id="lastName" onChange={this.updateVisitor.bind(this)} placeholder="last Name"/>
        <input type="text" id="email" onChange={this.updateVisitor.bind(this)} placeholder="email"/>
        <input type="password" id="password" onChange={this.updateVisitor.bind(this)} placeholder=""/>
        <button onClick={this
          .register
          .bind(this)}>Register</button>
      </div>
    )
  }
}

export default Register;