import React from 'react';
import axios from 'axios';
import CompletedGoal from './CompletedGoal.js'

class CompletedList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>Completed Goals
      {this.props.post.map((goal,i)=>{
        return(
         <CompletedGoal
         key={i}
         id={goal.id}
         title={goal.title}
         />
        )
      })}
      </div>
    )
  }
}

export default CompletedList;
