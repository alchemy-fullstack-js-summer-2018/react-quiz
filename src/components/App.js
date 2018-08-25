import React, { Component } from 'react';
import pokedex from '../../pokedex';
import Pokemon from './Pokemon';

class App extends Component {

  state = {
    pokedex: pokedex,
    favorite: null
  };

  render() {

    return (
      <div>Hello React Quiz! {Pokemon}</div>
    );
  }
}

export default App;