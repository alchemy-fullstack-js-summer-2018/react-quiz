import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  
  static Proptypes = {
    pokemon: PropTypes.object.isRequired
  }

  render() { 
    const { pokemon } = this.props;
    return ( 
      <li>
        <p>{pokemon.pokemon}</p>
        <img src={pokemon.url_image}/>
        <p>Type 1: {pokemon.type_1}</p>
        <p>Type 2: {pokemon.type_2}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
      </li>
     );
  }
}
 
export default Pokemon;