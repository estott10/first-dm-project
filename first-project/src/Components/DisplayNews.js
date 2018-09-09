import React, { Component } from 'react';
import '../App.css';

export default class DisplayNews extends Component {
    constructor(props){
        super(props);
    
            this.state= {
                city: this.props.city
            }
            //binding
        }
    
    render(){
        //Destructuring
        return(
            <div className="displaynews">
                <h3 className="headline">{this.props.newsTitle}</h3>
                <a href={this.props.newsUrl}>Get The Full Story</a>
        </div>
        ) 
    }
}