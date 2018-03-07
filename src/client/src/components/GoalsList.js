import React from 'react';
import axios from 'axios';
import Goals from './Goals.js'

class GoalsList extends React.Component{
  constructor(props){
    super(props)
    // this.state = {
    //   post: []
    // }
    // this.onClick=this.onClick.bind(this)
  }



  // <div onClick={()=>{this.props.onClick()}}>{goal.description}
  //
  // </div>

  render(){
    // console.log(this.props.post)
    return(
      <div>GOALS

      {this.props.post.map((goal,i)=>{
        // console.log(goal)
        return(
         <Goals
         key={i}
         id={goal.id}
         description={goal.description}
         onClick={this.props.onClick}
         />
        )
      })}

      </div>
    )
  }
}

export default GoalsList;
