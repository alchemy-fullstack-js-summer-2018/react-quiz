import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {

  static propTypes = {
    pokemon: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  render() {
    const { pokemon, onDelete } = this.props;

    return (
      <p className="note-display">
        {pokemon.title}: {pokemon.content} 
        <button name="Delete" onClick={onDelete}>🗑</button>
      </p>
    );
  }
}

export default Pokemon;