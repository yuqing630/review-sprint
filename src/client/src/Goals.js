import React from 'react';


class Goals extends React.Component {
  constructor(props){
    super(props)
  }
  // console.log(props)
  render(){


  return(
    <div>
    <li onClick={()=> {this.props.handleClick()}}>{this.props.title}

    <button onClick={() => {this.props.onClick(this.props.id)}} >Completed</button></li>


    </div>
  )
}
}

export default Goals;
