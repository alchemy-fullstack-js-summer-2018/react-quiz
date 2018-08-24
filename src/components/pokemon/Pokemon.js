import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonDisplay from './PokemonDisplay';

class Pokemon extends Component {

  static propTypes = {
    pokemon: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleDelete = () => {
    const { pokemon, onRemove } = this.props;
    return onRemove(pokemon.key);
  };

  render() {
    const { pokemon } = this.props;

    return (
      <li>
        <PokemonDisplay  
          pokemon={pokemon}
          onDelete={this.handleDelete}
        />
      </li>
    );
  }

}

export default Pokemon;