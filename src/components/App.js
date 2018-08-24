import React, { Component } from 'react';
import pokedex from '../pokedex';

class App extends Component {

  state = {
    pokedex: pokedex,
    favorite: null
  };

  render() {

    return (
      <div>Hello React Quiz! {this.state.pokedex.length}</div>
    );
  }
}

export default App;