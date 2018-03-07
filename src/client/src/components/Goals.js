import React from 'react';
import axios from 'axios';

class Goals extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      post: []
    }
  }

  componentDidMount(){
    axios.get('/goals')
    .then((response)=>{
      console.log(response.data)
      this.setState({
        post: response.data
      })
    })
    .catch((err)=>{
      console.log(err, 'err getting mountdata')
    })
  }
  render(){
    return(
      <div>


      </div>
    )
  }
}

export default Goals;
