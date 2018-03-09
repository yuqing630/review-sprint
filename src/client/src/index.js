import React from 'react';
import ReactDOM from 'react-dom';
import GoalForm from './GoalsForm.js'
import GoalsList from './GoalsList.js'
import axios from 'axios'
import { Switch, Route, Link } from 'react-router-dom'

class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      post: []
    }
    this.onClick = this.onClick.bind(this)
    this.getData = this.getData.bind(this)
  }
  // var data = this.props.location.state.data.id
  getData(){
    axios.get('/goals',{params:{
      id: this.props.location.state.data.id
    }})
    .then((response)=>{
      this.setState({
        post: response.data
      })
    })
    .catch((err)=>{
      console.log(err, 'err getting mountdata')
    })
  }

  componentDidMount(){
    // console.log(this.props.location.state.data.id,"mounst")
    this.getData()
  }
  onClick(id){
    axios.post('/complete', {id: id})
    .then((response)=>{
      axios.get('/goals')
      .then((response)=>{
        this.setState({
          post: response.data
        })
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }
 render(){
  //  console.log(this.props.location.state)

   return(
     <div>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/Completed' >Complete Goal</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/signup'>Signup</Link></li>
      <li><Link to={{ pathname: '/goalsform', query: { id: this.props.location.state } }}>Form</Link></li>
       <h1>Goalposts</h1>
        <GoalsList post={this.state.post} onClick = {this.onClick}/>
     </div>
     )
   }
}
// ReactDOM.render(<Home />, document.getElementById('root'));
export default Home;
