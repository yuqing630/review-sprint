import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {Switch, Route, Link} from 'react-router-dom'

class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     description: '',
     userInput: '',
     notes: []
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.getPost=this.getPost.bind(this)
  }
  componentDidMount(){
    axios.get('description', {params:
      {id:this.props.location.state.data}
    })
    .then((response)=>{
      this.setState({
        description:response.data[0].description
      })
      this.getPost()
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  onChange(e){
    this.setState({
        userInput: e.target.value
    })
  }
  getPost(){
    axios.get('/post', {params: {
      id: this.props.location.state.data
    }})
    .then((response)=>{
      this.setState({
        notes: response.data
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  handleSubmit(){
    axios.post('/post', {
      userInput: this.state.userInput,
      id: this.props.location.state.data
    })
    .then((response)=>{
      this.getPost()
      this.setState({
        userInput: ''
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  render(){
    return(
      <div>
      <li><Link to='/'>Back</Link></li>
      DESCRIPTION
      <div>
      {this.state.description}
      <div>
      <input type='text' value={this.state.userInput} placeholder='progress' onChange={(e)=>{this.onChange(e)}} validations="isExisty"></input>
      <button onClick={()=>{this.handleSubmit()}}>Submit</button>
      </div>
      Notes
      {this.state.notes.map((note, i)=>{
        return(
          <li>{note.post}</li>
        )})}
      </div>
      </div>
    )
  }
}
export default Detail;
