import React, { Component } from 'react';
import pokedex from '../pokedex';

class App extends Component {

  state = {
    pokedex: pokedex,
    favorite: null
  };

  render() {
    const { pokedex } = this.state;

    return (
      <li>
        <h1>Hello React Quiz! {this.state.pokedex.length}</h1>
        
        <p>{pokedex}</p> 
          
      </li>
    );
  }
}


export default App;