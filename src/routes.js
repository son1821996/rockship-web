import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './containers/Home';
import ServiceItem from './components/Service/ServiceItem';

// eslint-disable-next-line react/prefer-stateless-function
export default class Routes extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/item" component={ServiceItem} />
        </Switch>
      </Router>
    );
  }
}
