import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import MealSelection from './MealSelection/MealSelection';
import Date from './Date/Date';

class App extends Component {
  state = {
    persons:[
      {name: 'Erika'},
      {name: 'Paul'},
      {name: 'Gary'}
    ],

    meals: [
      {name: 'Erika', selection: 'Vegan Curry'},
      {name: 'Paul', selection: 'Ravioli'},
      {name: 'Gary', selection: 'Chicken'}
    ],

    dates: [
     {name: 'Erika', plusOne: 'Yes'},
     {name: 'Paul', plusOne: 'Yes'},
     {name: 'Gary', plusOne: 'No'}
    ]
  }

  switchDatesHandler = () => {
    // Don't do this: this.state.persons[0].name = 'Jade';
    //console.log('Was Clicked!');
    this.setState( {
      dates: [
        {name: 'Erika', plusOne: 'No! Josh and I just broke up! :('},
        {name: 'Paul', plusOne: 'No'},
        {name: 'Gary', plusOne: 'I just picked her up at a bar... so yes!'}
      ]
    } )
  }

  render() {
    return (
      <div className="App">
     <h1 className= "title">Erika's Dinner Party</h1>
     <p>The Event of the Summer!</p>
     <button onClick={this.switchDatesHandler}>Change RSVP Status</button>
     <h2 className= "subtitles">Guest List</h2>
     < Person name= {this.state.persons[0].name} />
     < Person name= {this.state.persons[1].name} />
     < Person name= {this.state.persons[2].name} />
     <h2 className= "subtitles">Dinner Meal Selections</h2>
     <MealSelection name={this.state.meals[0].name} selection={this.state.meals[0].selection} />
     <MealSelection name={this.state.meals[1].name} selection={this.state.meals[1].selection}/>
     <MealSelection name={this.state.meals[2].name} selection={this.state.meals[2].selection}/>
     <h2 className= "subtitles">RSVP Status</h2>
     <Date name={this.state.dates[0].name} plusOne={this.state.dates[0].plusOne}/>
     <Date name={this.state.dates[1].name} plusOne={this.state.dates[1].plusOne}/>
     <Date name={this.state.dates[2].name} plusOne={this.state.dates[2].plusOne}/>
     <footer className="closing">Thanks for Coming!</footer>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, "Does this work now?"))
  }
}

export default App;
