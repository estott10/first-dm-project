import React, {Component} from 'react';
import '../App.css';


export default class Weather extends Component {
   
        //binding
    //methods

    render(){

        return(
            <div className="weather-card">
               <h2> Current Temperature </h2>
               <h4>{this.props.winfo}</h4>
               <h5 className="weathertext" >{this.props.temp}</h5>
            </div>

        )
    }
}