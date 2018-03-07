import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import Home from './index.js';
import CompletedGoals from './completed.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/Completed" component={CompletedGoals} />
      </div>
    );
  }
}

export default App;
