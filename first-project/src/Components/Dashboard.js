import React, { Component } from 'react';
import '../App.css';
import Weather from './Weather'
import DisplayNews from './DisplayNews'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)



    }


    render() {
        const { articleList } = this.props
        return (
            <div className= "dashboard">
                <div className= "input_dashboard">
                    <span className= "input_div">
                        <input type="text" placeholder="Los Angeles" className='input' value={this.props.city} onChange={this.props.weatherinput} />
                        <button className='search' onClick={() => { this.props.submitWeather(); this.props.searchArticles(); this.props.clearInput() }} >Search</button>
                    </span>
                </div>
                    <div className= "weather_dashboard">
                        <Weather currentTemp={this.props.temp} hightemp={this.props.high} lowtemp={this.props.low} currentCity={this.props.city} />
                    </div>
                    <div className="news_list">
                    <h2 className= "top_stories"> World News Top Stories</h2>
                        {articleList.map((elem, i) => {
                            return <ul className="article_List" key={i}>
                            <DisplayNews newsTitle={elem.title} newsUrl={elem.url} /> 
                            </ul>;
                            })
                        }
                    </div>
            </div>

        )
    }
}