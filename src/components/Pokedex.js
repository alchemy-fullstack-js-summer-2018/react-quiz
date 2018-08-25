import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends Component {

  static propTypes = {
    pokedex: PropTypes.array,
    onSelect: PropTypes.func
  };
  render() {
    const { pokedex, onSelect } = this.props;
    return (
      <ul>
        {pokedex.map(pokemon => (
          <Pokemon
            key={pokemon.id}
            pokemon={pokemon}
            onSelect={onSelect}
          />
        ))}
      </ul>
    );
  }
}

export default Pokedex;
