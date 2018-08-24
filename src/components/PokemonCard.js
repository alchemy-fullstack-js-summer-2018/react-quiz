import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/PokemonCard.css';

export default class Pokemon extends Component {

  static propTypes = {
    pokemon: PropTypes.object.isRequired
  };

  render() {
    const { pokemon } = this.props;
    const { name, url_image, type_1, type_2 } = pokemon;
    

    return (
      <li className={styles.card}>
        <img src={url_image}/>
        <h3>{name}</h3>
        <p>Type: {type_1}, {type_2}</p>
      </li>
    );

  }

}