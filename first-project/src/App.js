import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
// import Events from './Components/Events.js'
// import Input from './Components/Input.js'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      weatherConditions: {},
      prop: ""
    }
  }

  componentDidMount(){
    
    axios.get('/api/forecast')
    .then( (response)=> {
   
        this.setState( {weatherConditions: response.data} ) 
      })
  }

  onchange = (event) => {
    const { value } = event.target;
    this.setState({ prop: value })
  }

  render() {
    let high = "";
    if(this.state.weatherConditions && this.state.weatherConditions.list && this.state.weatherConditions.list[0] && this.state.weatherConditions.list[0].main){
      high = (((this.state.weatherConditions.list[0].main.temp )* 9) /5) - 459.67
    }
   
    return (
      <div className="App">
      <h1>Today's Weather In The Bay</h1>
   <input className='input' value={this.state.prop} onChange={this.onchange}/>
      <h2> Weather </h2>
        {high}
      </div>
    );
  }
}


