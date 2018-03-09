import React from 'react'
import axios from 'axios'
import {Redirect, Link} from 'react-router-dom'
import Login from './login.js'

class Signup extends React.Component{
  constructor(props){
    super(props)
    this.state={
      username: '',
      password: '',
      auth: false,
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
      // console.log(response)
      if(response.data==='error'){
      }else{
        // console.log('new username')
      this.setState({
        auth: true
      })
      }


    })
    .catch((err)=>{
      this.setState({
        username: '',
        password: ''
      })
      console.log(err, 'Username Taken')
    })
  }
  render(){
    // console.log(this.state.auth)
    if(this.state.auth){
      return (
      <Redirect to ='/login'/>
    )}
    return(

      <div>
      <div>
      <li><Link to='/login'>Login</Link></li>
      </div>
      Sign Up
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
