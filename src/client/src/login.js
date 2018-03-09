import React from 'react'

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={
      username: '',
      password: ''
    }
    this.handleLogin=this.handleLogin.bind(this)
  }
  handleLogin(){
    console.log('cat')
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
    return(
      <div>Login
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
