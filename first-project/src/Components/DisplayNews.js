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
                <a href={this.props.newsUrl} className="full_story"><h3 className="headline">{this.props.newsTitle}</h3></a>
            </div>
        ) 
    }
}