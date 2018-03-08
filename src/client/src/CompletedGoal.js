import React from 'react';
import {Redirect} from 'react-router-dom'


class CompletedGoals extends React.Component {
  constructor(props){
    super(props)
    this.state={
      show: false,
      id: ''
    }

    this.handleClick=this.handleClick.bind(this)
  }
  // console.log(props)

  handleClick(id){
    // console.log('cats')
    // this.props.history.push('/detail')
    this.setState({
      show: !this.state.show,
      id: id
    })
    // console.log(this.state)
  }
  render(){
  if(this.state.show === true){
    return (
      <Redirect to={{
        pathname: '/completedetail',
        state: {data: this.state.id}
      }}
      />
    )
  }

  return(
    <div>
    <li onClick={()=> {this.handleClick(this.props.id)}}>{this.props.title}</li>


    </div>
  )
}
}

export default CompletedGoals;
