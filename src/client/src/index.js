import React from 'react';
import ReactDOM from 'react-dom';
import GoalForm from './components/GoalsForm.js'
import GoalsList from './components/GoalsList.js'

class App extends React.Component{
  constructor(props) {
    super(props)
  }
 render(){
   return(
     <div>
     <div>
       <h1>Goalposts</h1>
       <GoalForm />
     </div>
     <div>
        <GoalsList/>
     </div>
     </div>
   )
 }

}


ReactDOM.render(<App/>, document.getElementById('app'));
