import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './containers/Home';
import ContactContainer from './containers/ContactContainer';
import News from './containers/News';

// eslint-disable-next-line react/prefer-stateless-function
export default class Routes extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={ContactContainer} />
          <Route exact path="/News" component={News} />
        </Switch>
      </Router>
    );
  }
}
