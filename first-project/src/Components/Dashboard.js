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
            <div>
                <div>
                    <span>
                        <h4 className="input-header">Enter City Here:</h4>
                        <input type="text" placeholder="Los Angeles" className='input' value={this.props.city} onChange={this.props.weatherinput} />
                        <button className='search' onClick={() => { this.props.submitWeather(); this.props.searchArticles() }} >Search</button>
                    </span>
                </div>
                <div>
                    <Weather currentTemp={this.props.temp} hightemp={this.props.high} lowtemp={this.props.low} />
                </div>
                <div>
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