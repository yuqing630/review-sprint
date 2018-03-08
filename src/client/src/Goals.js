import React from 'react';
import {Redirect} from 'react-router-dom'


class Goals extends React.Component {
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
    // console.log(this.props)
  if(this.state.show === true){
    return (
      <Redirect to={{
        pathname: '/detail',
        state: {data: this.state.id}
      }}
      />
    )
  }

  return(
    <div>
    <li onClick={()=> {this.handleClick(this.props.id)}}>{this.props.title}</li>

    <button onClick={() => {this.props.onClick(this.props.id)}} >Completed</button>


    </div>
  )
}
}

export default Goals;
