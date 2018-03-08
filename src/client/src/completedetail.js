import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {Switch, Route, Link} from 'react-router-dom'

class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // description = ''
     description: ''
    }
  }
  componentDidMount(){
    axios.get('description', {params:
      {id:this.props.location.state.data}
    })
    .then((response)=>{
      // console.log(response.data[0].description)
      this.setState({
        description:response.data[0].description
      })
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  render(){
    // console.log(this.props.location.state.data)
    return(
      <div>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/Completed'>Back</Link></li>
      DESCRIPTION
      <div>
      {this.state.description}
      </div>
      </div>
    )
  }
}

export default Detail;
