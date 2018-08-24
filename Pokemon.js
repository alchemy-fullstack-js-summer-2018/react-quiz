import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokedex from './Pokedex';

class Pokemon extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    pokemon: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
  };
}
