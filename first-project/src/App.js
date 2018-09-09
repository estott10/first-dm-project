import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './Components/Dashboard';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherConditions: "",
      weatherHigh: "",
      weatherLow: "",
      city: "",
      weatherObj: [],
      apiKey: '156de3e62727130be6afca5f4c49d571',
      newsList: [],
      newsapiKey: '2a16d2b9dc7445648d479c84c235c29d',
      country: "us",
    }
    this.submitchange = this.submitchange.bind(this)
    this.onchange = this.onchange.bind(this)
    this.searchArticles = this.searchArticles.bind(this)
  }
  

  submitchange = () => {

    axios.get('/api/weather', {
      params: {
        inputCity: this.state.city
      }
    }) 
      .then((result) => {
        console.log(result.data.temp)
        this.setState({ 
          weatherConditions: result.data.temp,
          weatherHigh: result.data.temp_max,
          weatherLow: result.data.temp_min,
        })
      })
    }

    searchArticles= () => {

    axios.get('/api/news')
      .then((result) => {
        console.log(result.data.articles)
        this.setState({
          newsList: result.data.articles,
        })
      })
  }


  onchange = (event) => {
    const { value } = event.target;
    this.setState({ city: value })
  }

  render() {
    let currenttemp = this.state.weatherConditions.toString();
    let highTemp= this.state.weatherHigh.toString();
    let lowTemp= this.state.weatherLow.toString();


    return (
      <div className="App">
        <h1 className="App-title">Today's Weather</h1>
        <Dashboard weatherinput={this.onchange} city={this.state.city} submitWeather={this.submitchange} searchArticles={this.searchArticles} articleList={this.state.newsList}  temp={currenttemp} high={highTemp} low={lowTemp}
        />
      </div>
    );
  }
}