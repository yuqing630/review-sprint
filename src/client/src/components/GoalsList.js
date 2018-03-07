import React from 'react';
import axios from 'axios';
import Goals from './Goals.js'

class GoalsList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      post: []
    }
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
  // {this.state.post.map((goal,i)=>{
  //   return(
  //     <Goals data={goal.description} key={i}/>
  //   )
  // })}
  render(){
    console.log(this.state.post)
    return(
      <div>
  

      </div>
    )
  }
}

export default GoalsList;
