import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokemon extends Component {

  render() { 
    const { pokemon } = this.state;

    return ( 
      <section>
        {<Pokedex pokemon={pokemon}/>}
      </section>
    );
  }
}
 
export default Pokemon;
