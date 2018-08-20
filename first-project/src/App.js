import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      characters: {}
    }

  }

  componentDidMount(){
    axios.get('/api/characters')
    .then( (response)=> {
        this.setState( {characters: response.data} ) 
      })
  }

  render() {
    function charactersCards(characters) {
      for (var key in characters) {
        if(key === 'main') {
          return characters['main']['temp'];
        }
      }
    }
    return (
      <div className="App">
       Characters
        {charactersCards()}
      </div>
    );
  }
}

export default App;
