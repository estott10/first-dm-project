import React, {Component} from 'react';


export default class Weather extends Component {
   
        //binding
    //methods

    render(){

        return(
            <div>
               <h2> Temperatures </h2>
               <h4>{this.props.winfo}</h4>
               <h5>{this.props.temp}</h5>
            </div>

        )
    }
}