import React, { Component } from 'react';

import ServiceItem from './ServiceItem';
import '../../stylesheets/Service/Service.scss';

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="service">
        <div className="service-introduce">
          <div className="dash" style={{ backgroundColor: '#ffffff', height: '4px', width: '60px' }} />
          <h1 className="title">
            Service
          </h1>
          <p>
          A relationship with Rockship means a relationship
          with a team of caring professionals that understand the challenges
          that come with a project. We will walk you through the requirements
          processing to product release with a
          caring touch following documented and proven processes that ensure a successful outcome.
          </p>
          <ul>
            <li>
            A comprehensive project plan that clearly identifies the scope and schedule,
            including implementation tasks and deliverables
            </li>
            <li>
            A communication and education process that is effective and efficient
            </li>
            <li>
            Dedicated support staff to assist your entire team through the go-live process
            </li>
          </ul>
        </div>
        <ServiceItem />
      </section>
    );
  }
}

export default Service;
