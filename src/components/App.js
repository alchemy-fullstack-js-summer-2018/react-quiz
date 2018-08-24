import React, { Component } from 'react';
import pokedex from '../pokedex';
import Pokedex from './Pokedex';

class App extends Component {

  state = {
    pokedex: pokedex,
    favorite: null
  };

  // favorite passed in
  handleSelect = () => {
    console.log('you selected your fav pokemon!');
  }

  render() {

    return (
      <div>
        Hello React Quiz! {this.state.pokedex.length}

        <section className="favorite">
          {pokedex
            ? <div><img src={pokedex.url_image}></img>{pokedex.pokemon}</div>
            : <p>please select your favorite pokemon!</p>
          }
        </section>

        <section>
          <Pokedex onSelect={this.handleSelect}/>
        </section>  
      </div>
    );
  }
}

export default App;