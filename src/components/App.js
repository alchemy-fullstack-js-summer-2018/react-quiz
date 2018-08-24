import React, { Component } from 'react';
import pokedex from '../pokedex';
import Pokedex from './Pokedex';

class App extends Component {

  state = {
    pokedex: pokedex,
    favorite: null
  };

  render() {

    return (
      <div>
        Hello React Quiz! {this.state.pokedex.length}

        <section>
          <Pokedex />
        </section>  
      </div>
    );
  }
}

export default App;