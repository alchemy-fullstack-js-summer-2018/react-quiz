import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends Component {

  static Proptypes = { 
    pokedex: PropTypes.array.isRequired
   }

  render() { 
    const { pokedex } = this.props;
    return ( 
      <ul>
        {pokedex.map((pokemon, i) => (
          <Pokemon key={i} pokemon={pokemon}/>
        ))}
      </ul>
     );
  }
}
 
export default Pokedex;