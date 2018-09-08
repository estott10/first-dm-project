import React, { Component } from 'react';
import App from '../App';
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
                <h3 className="headline">{this.props.showNews}</h3>
                <a href={this.props.link}>Get The Full Story</a>
        </div>
        ) 
    }
}