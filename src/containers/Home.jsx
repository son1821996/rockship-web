import React, { Component, Fragment } from 'react';

import Navigation from '../components/Navigation/Navigation';
import Service from '../components/Service/Service';
import Clients from '../components/Clients/Clients';


import '../stylesheets/Home/Home.scss';
import Contact from '../components/Contact/Contact';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <header>
          <Navigation />
          <div className="header-content">
            <div className="welcome-title">
            Welcome to Rockship
            </div>
            <div className="welcome-sub">
            We are here to Acelerate Your Business
            and Help you Find The Way
            </div>
            <div className="header-bottom">
              <img alt="ship" src="./img/rockship.png" className="ship" />
              <img alt="white-cloud" src="./img/white-cloud.png" className="white-clound" />
              <img alt="grey-cloud" src="./img/grey-cloud.png" className="grey-cloud" />
            </div>
          </div>
        </header>
        <Service />
        <Clients />
        <Contact />
      </Fragment>
    );
  }
}

export default Home;
