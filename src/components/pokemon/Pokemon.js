import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Pokemon.css';

class Pokemon extends Component {
  
  static Proptypes = {
    pokemon: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  render() { 
    const { pokemon, onSelect } = this.props;
    return ( 
      <li classNAme={styles.pokemon} onClick={onSelect}>
        <p><strong>{pokemon.pokemon}</strong></p>
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