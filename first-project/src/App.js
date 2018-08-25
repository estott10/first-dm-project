import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import DisplayNews from './Components/DisplayNews';
import Weather from './Components/Weather'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      weatherConditions: "",
      city: "",
      apiKey: '156de3e62727130be6afca5f4c49d571',
      news: [],
      newsapiKey:'2a16d2b9dc7445648d479c84c235c29d'
    }
    this.submitchange= this.submitchange.bind(this)
    this.newsupdate= this.newsupdate.bind(this)

  }


    submitchange= () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${this.state.apiKey}`)
    .then( (response)=> {
        this.setState( {weatherConditions: response.data.main.temp} ) 
      })
    }

    newsupdate= () => {
      debugger
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&apikey=${this.state.newsapiKey}`)
      .then( (response)=> {
      debugger
          this.setState( {news: response.articles} ) 
        })
      }

  onchange = (event) => {
    const { value } = event.target;
    this.setState({ city: value })
  }

  render() {
   const weatherinfo = "Local Weather"
   let currenttemp = 
   Math.floor(((parseInt(this.state.weatherConditions, 10)* 9) /5) - 459.67);
   let breakingnews= "NEWSNEWSNEWS"
    return (
      <div className="App">
      <h1>Today's Weather</h1>
   <input className='input' value={this.state.city} onChange={this.onchange}/>
   <button className='search' onClick= {this.submitchange} >Search</button>
   <Weather winfo= {weatherinfo} temp= {currenttemp}/>
        <h2>Breaking News Plus Headlines</h2>
      <DisplayNews displaynews={breakingnews}/>
      </div>
    );
  }
}