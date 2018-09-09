import React, { Component } from 'react';
import '../App.css';



export default class Weather extends Component {
    constructor(props) {
        super(props)



    }

    render() {

        return (
            <div className="weather-card">
                    <h2 className="weather_card_title"> Current Temperature </h2>

                    <h4>{this.props.winfo}</h4>
                    <h5 className="weathertext" >{this.props.currentTemp}</h5>
                    <div>
                        <h3>High: {this.props.hightemp}</h3>
                        <h3>Low: {this.props.lowtemp}</h3>
                    
                </div>
            </div>

        )
    }
}