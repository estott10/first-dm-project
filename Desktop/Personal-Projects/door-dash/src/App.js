import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Views/Board/Board';

class App extends Component {
  render() {
    return (
      <div className="App">

          <div className="login">

            <input placeholder="Type your username..."></input>
        
            <button style= {{backgroundColor: "red", color: "white", borderRadius: "4px"}}> Join the DoorDash Chat!</button>
         
          </div>

         <Board title = "Engineering"/>
      </div>
    );
  }
}

export default App;
