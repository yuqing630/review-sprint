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
    this.state = {
      show: false
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      show: !this.state.show
    })
    // console.log(this.state.show)
  }


  // <div onClick={()=>{this.props.onClick()}}>{goal.description}
  //
  // </div>

  render(){
    console.log(this.props.post)

    // this.state.show === false ? console.log('cats', this.state.show) : null

    return(
      <div>GOALS

      {this.props.post.map((goal,i)=>{
        // console.log(goal)
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
