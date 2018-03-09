import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Home from './index.js';
import CompletedGoals from './completed.js';
import Details from './detail.js';
import CompleteDetail from './completedetail.js';
import Login from './login.js';
import Signup from './signup.js'

class App extends React.Component {
  render() {
    return (
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/Completed" component={CompletedGoals} />
        <Route path="/detail" component={Details}/>
        <Route path="/completedetail" component={CompleteDetail}/>
      </Switch>
      </div>
    );
  }
}

export default App;
