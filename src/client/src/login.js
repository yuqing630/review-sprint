import React from 'react';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom'
import Signup from './signup.js'
import Auth from './auth.js';
import jwt from 'jwt-simple'


class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={
      token: '',
      username: '',
      password: '',
      id: 0,
      redirectToReferrer: false
    }
    this.handleLogin=this.handleLogin.bind(this)
  }

  handleLogin() {
      Auth.username = this.state.username;
      Auth.password = this.state.password;
      let that = this;
      Auth.authenticate(isAuthenticated => {
        if (!isAuthenticated) {
          axios
            .post('/login', {
              username: that.state.username,
              password: that.state.password,
            })
            .then(res => {
              if(res.status === 200){
                console.log(res)
                console.log('successfully logged in');
                // console.log(res.data)
                let secret ='xxx'
                let decode = jwt.decode(res.data,secret)
                // console.log(decode)
                that.setState({
                  token: res.data,
                  id: decode.id,
                  redirectToReferrer: true
                });
              }else{
                that.setState({
                  username:'',
                  password:''
                })
              }

            });
        } else {

        }
      });
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

  render(){
    if(this.state.redirectToReferrer){
      return (
      <Redirect to ={{
        pathname: '/',
        state: {data: this.state}
      }}/>
    )}

    return(

      <div>
      <div>
      <li><Link to='/signup'>Signup</Link></li>
      </div>
      Login
      <div>
      <input type='text' value={this.state.username} placeholder='username' onChange={(e)=>{this.handleUserName(e)}}></input>
      </div>
      <div>
      <input type='text' value={this.state.password} placeholder='password' onChange={(e)=>{this.handlePassword(e)}}></input>
      <button onClick={()=>{this.handleLogin()}}>Login</button>
      </div>

      </div>
    )
  }
}
export default Login;
