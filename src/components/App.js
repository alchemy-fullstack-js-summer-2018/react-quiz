import React, { Component } from 'react';
import pokedex from '../pokedex';
import Pokedex from './Pokedex';

class App extends Component {

  state = {
    pokedex: pokedex,
    favorite: null
  };

  handleSelect = () => {
    console.log('Clicked!');
  };

  render() {
    console.log(pokedex);

    return (
      <div>
        <div>Hello React Quiz! {this.state.pokedex.length}</div>
        <Pokedex
          pokedex={this.state.pokedex}
          onSelect={this.handleSelect}
        />
      </div>
    );
  }
}

export default App;