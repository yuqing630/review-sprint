import React from 'react';
import ReactDOM from 'react-dom';
import GoalForm from './components/GoalsForm.js'
import GoalsList from './components/GoalsList.js'
import axios from 'axios'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      post: []
    }
    this.onClick = this.onClick.bind(this)
  }

  componentDidMount(){
    axios.get('/goals')
    .then((response)=>{
      // console.log(response.data)
      this.setState({
        post: response.data
      })
    })
    .catch((err)=>{
      console.log(err, 'err getting mountdata')
    })
  }
  onClick(id){
    console.log(id)
    axios.post('/complete', {id: id})
    .then((response)=>{
      // console.log('change')
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
   return(
     <div>
     <div>
       <h1>Goalposts</h1>
       <GoalForm />
     </div>
     <div>
        <GoalsList post={this.state.post} onClick = {this.onClick}/>
     </div>
     </div>
   )
 }

}


ReactDOM.render(<App/>, document.getElementById('app'));
