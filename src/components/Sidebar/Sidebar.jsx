import React from 'react';

import object from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';

import '../../stylesheets/Sidebar/Sidebar.scss';

const Sidebar = (props) => {
  const { history } = props;
  console.log('match', history);
  return (
    <Link to="/news">
      <div className="sidebar-container">
        <Link to="/">
          <img src="../img/logo.png" alt="logo" />
        </Link>
        <KeyboardBackspace style={{ color: '#ffffff' }} />
      </div>
    </Link>
  );
};

Sidebar.propTypes = {
  history: object.isRequired,
};

export default withRouter(Sidebar);
