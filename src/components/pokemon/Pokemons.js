import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokemons extends Component {

  static propTypes = {
    pokemons: PropTypes.array,
    onRemove: PropTypes.func.isRequired
  };

  render() {
    const { pokemons, onRemove } = this.props;

    return (
      <ul className="pokemons-container">
        {pokemons.map(pokemon => (
          <Pokemon 
            key={pokemon.key} 
            pokemon={pokemon}
            onRemove={onRemove}
          />
        ))}
      </ul>
    );
  }
}

export default Pokemons;