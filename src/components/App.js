import React, { Component, Fragment } from 'react';
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
  };

  render() {
    const { pokedex } = this.state;

    return (
      <div>
        Hello React Quiz! {pokedex.length}

        <section className="favorite">
          {pokedex
            ? <div><img src={pokedex.url_image}></img>{pokedex.pokemon}</div>
            : <p>please select your favorite pokemon!</p>
          }
        </section>

        <section>
          {pokedex &&
            <Fragment>
              <Pokedex onSelect={this.handleSelect} pokemon={pokedex}/>
            </Fragment>
          }
        </section>  
      </div>
    );
  }
}

export default App;