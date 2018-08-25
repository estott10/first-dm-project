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
                {this.props.displaynews}
            <button>=======================</button>
        </div>
        ) 
    }
}