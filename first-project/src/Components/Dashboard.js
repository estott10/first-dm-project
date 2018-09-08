import React, { Component } from 'react';
import '../App.css';
import Weather from './Weather'
import DisplayNews from './DisplayNews'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)



    }


    render() {

        return (
            <div>
                <div>
                    <span>
                        <h4 className="input-header">Enter City Here:</h4>
                        <input type="text" placeholder="Los Angeles" className='input' value={this.props.city} onChange={this.props.weatherinput} />
                        <button className='search' onClick={() => { this.props.submitWeather(); this.props.searchArticles() }} >Search</button>
                    </span>
                </div>
                <Weather winfo={this.props.winfo} currentTemp={this.props.temp} hightemp={this.props.high} lowtemp={this.props.low} />
                <DisplayNews showNews={this.props.displaynews} link={this.props.newslink} />
            </div>

        )
    }
}