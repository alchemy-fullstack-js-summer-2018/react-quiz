import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addFavorite } from '../../services/favoritesApi.js';
import { Link } from 'react-router-dom';

export default class Pokemon extends Component {

  static propTypes = {
    pokemon: PropTypes.object.isRequired,
  };

  handleClick = () => {
    
    addFavorite(this.props.pokemon)
      .catch(console.log);
  };


  render() {
    const { pokemon } = this.props;
    const { imageUrl, name, setName } = pokemon;

    return (
      <li>
        <Link to={`/detail/${pokemon.id}`}>
          {imageUrl ?
            <img src={imageUrl} alt={`${name}(${setName})`}/>
            : <p>{name}<br/>({setName}) <br/>Image Not Available</p>
          }
        </Link>
      </li>
    );
  }
}