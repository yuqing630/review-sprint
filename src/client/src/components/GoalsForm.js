import React from 'react';
import axios from 'axios'

class GoalForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: ''
    }

    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      userInput: e.target.value
    })
  }
  handleSubmit(){
  axios.post('/goals',{
    data: this.state.userInput
  })
  .then((response)=>{
    console.log('add to server')
  })
  .catch((err)=>{
    console.log(err, 'err save in to sever')
  })
  }


  render(){
  return (
    <div>
    <form name="goal-form">
      <input type='text' value={this.state.userInput} placeholder='GOAL' onChange={(e)=>{this.handleChange(e)}}></input>
      <button onClick={()=>{this.handleSubmit()}}>Submit</button>
    </form>
    </div>
  )}
}

export default GoalForm;
