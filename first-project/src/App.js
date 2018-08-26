import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import DisplayNews from './Components/DisplayNews';
import Weather from './Components/Weather'
import ExitMessage from './Components/ExitMessage'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      weatherConditions: "",
      city: "",
      apiKey: '156de3e62727130be6afca5f4c49d571',
      news: "",
      newsurl: "",
      newsapiKey:'2a16d2b9dc7445648d479c84c235c29d',
      country: "us",
    }
    this.submitchange= this.submitchange.bind(this)
    this.onchange= this.onchange.bind(this)
    this.addobj= this.addobj.bind(this)
  }


  submitchange= () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=imperial&APPID=${this.state.apiKey}`)
    .then( (response)=> {
        this.setState( {weatherConditions: response.data.main.temp} ) 
      })
    axios.get(`https://newsapi.org/v2/top-headlines?country=${this.state.country}&apikey=${this.state.newsapiKey}`)
      .then( (response)=> {
          this.setState( {news: response.data.articles[0].title,
            newsurl: response.data.articles[0].url } ) 
        })
    }

  onchange = (event) => {
    const { value } = event.target;
    this.setState({ city: value })
  }

  addobj= () => {
    const funfacts= `Top Story in ${this.state.city}`

    debugger
  axios.post('/api/bigform', funfacts)
  .then( (response)=> {
    debugger
    this.setState({ facts: response.data })
    }) 
}
    
  render() {
   const weatherinfo = "Local Weather"
   let currenttemp = this.state.weatherConditions.toString();
   let breakingnews= this.state.news;
   let breakingnewsurl= this.state.newsurl;
   let facts= this.state.facts;

    return (
      <div className="App">
      <h1 className= "App-title">Today's Weather</h1>
      <span>
      <h4 className="input-header">Enter City Here:</h4>
      <input type="text" placeholder="Los Angeles" className='input' value={this.state.city} onChange={this.onchange} />
      <button className='search' onClick= {this.submitchange} >Search</button>
      </span>
      <Weather winfo= {weatherinfo} temp= {currenttemp}
      />
      <DisplayNews facts={facts} displaynews={breakingnews} newslink={breakingnewsurl} />
      <ExitMessage />
      </div>
    );
  }
}