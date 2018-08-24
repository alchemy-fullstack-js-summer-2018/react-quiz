import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends Component {

  static propTypes = {
    pokedex: PropTypes.arrayOf(Object)
  };

  render() { 
    const { pokedex } = this.props;

    return ( 
      <ul>
        {pokedex.map((poke, i) => (
          <Pokemon key={i} poke={poke}/>
        ))}
      </ul>
    );
  }
}
 
export default Pokedex;

