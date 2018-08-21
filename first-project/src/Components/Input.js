import React, { Component } from 'react';



export default class Input extends Component {
    constructor(){
        super();

        this.state= {
            userCity: ''
        }
        //binding
    }
        handleChange(userCity){
            this.setState({
                userCity
            })
            // console.log(userCity);
        }
    //update state in app.js?  using method.. //destructure and update userCity? // then access weather and events Api's 
        requestWeather(userCity){
            const { componentDidMountFn } = this.props
            componentDidMountFn(userCity);
        }

        // requestEvents(userCity){
        //     const {}
        // }

    render(){
        //Destructuring



        return(
            <div>
            <input onChange= { (e) => this.handleChange(e.target.value) }/>
            
            <button onClick= { ()=> this.requestEvents()}> Submit </button>
            </div>
        )
        
    }

}