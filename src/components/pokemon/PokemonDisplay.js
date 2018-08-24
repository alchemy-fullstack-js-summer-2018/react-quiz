import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {

  static propTypes = {
    pokemon: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  render() {
    const { pokemon, onDelete } = this.props;

    return (
      <p className="note-display">
        {note.title}: {note.content} 
        <button name="Delete" onClick={onDelete}>🗑</button>
      </p>
    );
  }
}

export default Note;