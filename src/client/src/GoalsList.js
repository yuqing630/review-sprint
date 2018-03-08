import React from 'react';
import axios from 'axios';
import Goals from './Goals.js'

class GoalsList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      show: false
    }
  }
  render(){
    return(
      <div>GOALS
      {this.props.post.map((goal,i)=>{
        return(
         <Goals
         key={i}
         id={goal.id}
         title={goal.title}
         onClick={this.props.onClick}
         handleClick={this.handleClick}
         />
        )
      })}
      </div>
    )
  }
}

export default GoalsList;
