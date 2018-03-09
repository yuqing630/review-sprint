import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class GoalForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: '',
      userInputDesc: ''
    }

    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      userInput: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      userInputDesc: e.target.value
    })
  }
  handleSubmit(){
  if((this.state.userInput && this.state.userInputDesc) !== ''){
    axios.post('/goals',{
      data: this.state,
      thing: this.props
    })
    .then((response)=>{
      // this.props.getData()
      this.setState({
        userInput: '',
        userInputDesc: ''
      })
    })
    .catch((err)=>{
      console.log(err, 'err save in to sever')
    })
  }

  }


  render(){
    // console.log(this.props)

    return (
    <div>
    <li><Link to='/'>Home</Link></li>
    What is your goal?
       <div>
      <input type='text' value={this.state.userInput} placeholder='Goal Name' onChange={(e)=>{this.handleChange(e)}}></input>
      </div>
      <div>
      <textarea style={{height:'100px'}}type='text' value={this.state.userInputDesc} placeholder='Goal description' onChange={(e)=>{this.handleChange2(e)}}/>
      <button onClick={()=>{this.handleSubmit()}}>Submit</button>
      </div>
    </div>
  )}
}

export default GoalForm;
