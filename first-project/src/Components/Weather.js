import React, {Component} from 'react';


export default class Weather extends Component {
        //binding
    //methods

    render(){

        return(
            <div>
               <h2> Temperatures </h2>
               {this.props.winfo}
               {this.props.temp}
            </div>

        )
    }
}