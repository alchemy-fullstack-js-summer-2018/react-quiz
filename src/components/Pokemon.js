import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  
  static propTypes = {
    pokemon: PropTypes.object,
    onSelect: PropTypes.func
  };

  render() { 
    const { pokemon } = this.props;

    return (
      <li>
        <h3>Pokemon Component</h3>
        {/* <img src={pokemon.url_image}></img> */}
        <p>{pokemon.name}</p>
        <p>{pokemon.type_1}</p>
        <p>{pokemon.type_2}</p>
        <p>{pokemon.attack}</p>
        <p>{pokemon.defense}</p>
      </li>
    );
  }
}
 
export default Pokemon;