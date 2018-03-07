import React from 'react';
import axios from 'axios';
import CompletedGoal from './CompletedGoal.js'

class CompletedList extends React.Component{
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
      <div>Completed Goals

      {this.props.post.map((goal,i)=>{
        // console.log('insidemap', goal)
        return(
         <CompletedGoal
         key={i}
         id={goal.id}
         title={goal.title}
        //  onClick={this.props.onClick}
         />
        )
      })}

      </div>
    )
  }
}

export default CompletedList;
