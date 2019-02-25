import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';

const Sidebar = () => (
  <Link to="/news">
    <div className="sidebar-container">
      <Link to="/">
        <img src="../img/logo.png" alt="logo" />
      </Link>
      <KeyboardBackspace style={{ color: '#ffffff' }} />
    </div>
  </Link>
);

export default Sidebar;
