import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import List from './list'
import Login from './login'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/list">List</Link></li>
        </ul>
        <Route exact path='/list' component={List}/>
        <Route exact path='/login' component={Login}/>
      </div>
    );
  }
}

export default App;
