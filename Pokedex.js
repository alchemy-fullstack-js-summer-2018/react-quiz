import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends Component {

  state = {

  };

  static propTypes = {
    pokedex: PropTypes.array,
    onSelect: PropTypes.func.isRequired,
  };

}

