import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

export default class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
          weatherConditions: {},
          city: "",
          apiKey: '156de3e62727130be6afca5f4c49d571'
        }
      }
    
      componentDidMount(){
        const { city, apiKey} = this.state;
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)
        .then( (response)=> {
            console.log(response)
            this.setState( {weatherConditions: response.data} ) 
            console.log(this.state.weatherConditions)
          })
      }
    
      onchange = (event) => {
        const { value } = event.target;
        this.setState({ city: value })
        console.log(this.state.city)
      }

      

    render(){
        //Destructuring
        let high = "";
        if(this.state.weatherConditions && this.state.weatherConditions.list && this.state.weatherConditions.list[0] && this.state.weatherConditions.list[0].main){
      high = (((this.state.weatherConditions.list[0].main.temp )* 9) /5) - 459.67
    }


        return(
            <div className="inputbody">
            <input type= 'text' className='inputfield' value={this.state.city} onChange={this.onchange}/>
            <button type='submit' className= 'submit' onClick= { ()=> this.submitChange}>Submit</button>
            <h2> Weather </h2>
            {high}
        </div>
        ) 
    }
}