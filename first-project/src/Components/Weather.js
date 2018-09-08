import React, { Component } from 'react';
import '../App.css';
import ExitMessage from './ExitMessage'


export default class Weather extends Component {
    constructor(props) {
        super(props)



    }
    //binding
    //methods

    render() {

        return (
            <div>

                <div className="weather-card">
                    <h2> Current Temperature </h2>
                    <h4>{this.props.winfo}</h4>
                    <h5 className="weathertext" >{this.props.currentTemp}</h5>
                    <div>
                        <h7>High: {this.props.hightemp}</h7>
                        <h7>Low: {this.props.lowtemp}</h7>
                    </div>
                </div>
                <ExitMessage />
            </div>

        )
    }
}