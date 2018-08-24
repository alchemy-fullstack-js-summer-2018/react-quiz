import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pokedex from '../pokedex';
import styles from './main.css';

export default class Pokedex extends Component {

  static propTypes = {
    pokedex: PropTypes.array
  };

  render() {
    const { pokedex } = this.props;

    return (
      <ul>
        
        {pokedex.map((pokedex, i) => (
          <Pokedex key={i} pokedex={pokedex}/>
        ))}
      </ul>
    );
  }
}