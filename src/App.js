import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let helloWorld = {
      user: "John",
      password: "123456"
    }
    return (
      <div className="App">
        <h2>{helloWorld.user} = {helloWorld.password}</h2>
      </div>
    );
  }
}

export default App;
