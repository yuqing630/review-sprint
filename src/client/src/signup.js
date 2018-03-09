import React from 'react'
import axios from 'axios'

class Signup extends React.Component{
  constructor(props){
    super(props)
    this.state={
      username: '',
      password: ''
    }
    this.handleSignup=this.handleSignup.bind(this)
  }
  handleUserName(e){
    this.setState({
      username: e.target.value
    })
  }
  handlePassword(e){
    this.setState({
      password: e.target.value
    })
  }
  handleSignup(){
    axios.post('/signup',{
      username: this.state.username,
      password: this.state.password
    })
    .then((response)=>{
      console.log('add',response)
    })
    .catch((err)=>{
      console.log(err, 'err send signup data')
    })
  }
  render(){
    return(
      <div> Sign Up
      <div>
      <input type='text' value={this.state.username} placeholder='username' onChange={(e)=>{this.handleUserName(e)}}></input>
      </div>
      <div>
      <input type='text' value={this.state.password} placeholder='password' onChange={(e)=>{this.handlePassword(e)}}></input>
      <button onClick={()=>{this.handleSignup()}}>Signup</button>
      </div>
      </div>
    )
  }
}

export default Signup;
