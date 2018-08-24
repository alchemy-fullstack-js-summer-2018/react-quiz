import React, { Component } from 'react';
import Header from './Header';
import pokedex from '../components/pokemon/Pokemon';

class App extends Component {

  state = {
    pokedex: pokedex,
    favorite: null
  };

  render() {

    return (
      <div>
        
        <header>
          <Header/>
        </header>

        <p>React Quiz</p>

        {this.state.pokedex.length}
      </div>
    );
  }
}

export default App;