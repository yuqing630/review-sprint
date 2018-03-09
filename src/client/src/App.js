import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Home from './index.js';
import CompletedGoals from './completed.js';
import Details from './detail.js';
import CompleteDetail from './completedetail.js';
import Login from './login.js';
import Signup from './signup.js';
import Auth from './auth.js';
import PlaceHolder from './placeholder.js'
import GoalForm from './GoalsForm.js'

const PrivateRoute = ({component: Component }) => (
  <Route
    // {...rest}
    render={props =>
      Auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/Completed" component={CompletedGoals} />
        <Route path="/detail" component={Details}/>
        <Route path="/completedetail" component={CompleteDetail}/>
        <Route path="/goalsform" component={GoalForm}/>
      </div>
    );
  }
}

export default App;
