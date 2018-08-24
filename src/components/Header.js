import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {

  render() {

    return (
      <div className={styles.header}>
      
        <section className="header-container">
          <div className="logo">
            <h1>Pokemon</h1>
          </div>
        </section>
        
      </div>
    );
  }
}

export default Header;