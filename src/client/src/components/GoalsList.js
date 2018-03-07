import React from 'react';
import axios from 'axios';
import Goals from './Goals.js'

class GoalsList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      post: []
    }
    this.onClick=this.onClick.bind(this)
  }

  componentDidMount(){
    axios.get('/goals')
    .then((response)=>{
      // console.log(response.data)
      this.setState({
        post: response.data
      })
    })
    .catch((err)=>{
      console.log(err, 'err getting mountdata')
    })
  }

  onClick(){
    axios.post('/complete')
    .then((response)=>{
      console.log('change')
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  render(){
    console.log(this.state.post)
    return(
      <div>
      {this.state.post.map((goal,i)=>{
        console.log(goal)
        return(
          <div onClick={()=>{this.onClick()}}>{goal.description}
          <button></button>
          </div>
        )
      })}

      </div>
    )
  }
}

export default GoalsList;
