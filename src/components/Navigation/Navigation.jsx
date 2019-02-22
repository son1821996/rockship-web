import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Navigation/Navigation.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navigation">
        <div className="nav-left" style={{ display: 'flex' }}>
          <Link to="/"><img alt="logo" src="./img/logo.png" className="logo" /></Link>
          <ul className="navigation_list">
            <li className="nav_item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav_item">
              <Link to="/">Work</Link>
            </li>
            <li className="nav_item">
              <Link to="/">News</Link>
            </li>
            <li className="nav_item">
              <Link to="/">Blog</Link>
            </li>
            <li className="nav_item">
              <Link to="/">Career</Link>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <Link to="/contact">Come say hi!</Link>
        </div>
      </div>
    );
  }
}

export default Navigation;
