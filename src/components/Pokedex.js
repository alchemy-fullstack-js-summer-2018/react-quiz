import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

export default class Pokedex extends Component {

static propTypes = {
  pokedex: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func.isRequired
};

render() {
  const { pokedex, onSelect } = this.props;

  return (
    <ul>
      {pokedex.map((pokemon, i) => (
        <Pokemon
          key={i}
          pokemon={pokemon}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}
}
