import React from 'react';
import ReactDOM from 'react-dom';
import GoalForm from './GoalsForm.js'
import CompletedGoalsList from './CompleteGoalList.js'
import axios from 'axios'
import { Switch, Route, Link } from 'react-router-dom'


class Completed extends React.Component {
  constructor(props){
    super(props)
    this.state={
      post: []
    }
  }

  componentDidMount(){
    axios.get('/Completed')
    .then((response)=>{
      // console.log(response.data)

      this.setState({
        post: response.data
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  render(){
    return(
      <div>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/Completed'>Complete Goal</Link></li>
      <CompletedGoalsList post={this.state.post}/>
      </div>
    )
  }
}
export default Completed;
