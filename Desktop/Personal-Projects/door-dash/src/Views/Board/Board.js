import React, { Component } from 'react';

export default class Board extends Component{

  render(props){
    const {title} = this.props;

    return(
        <div>
            {title}
        </div>
    )
  }




}