import React, { Component } from 'react';
import { object } from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';


import '../../stylesheets/Contact/Contact.scss';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    color: '#ffffff',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      address: '',
      phoneNumber: '',
      content: '',
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    const {
      name, email, address, phoneNumber, content,
    } = this.state;
    const { classes } = this.props;

    return (
      <section className="contact-section">
        <div className="greeting">
        Hello, Get in touch with us!
        </div>
        <div className="contact-content">
          <div className="contact-form">
            <TextField
              id="standard-name"
              label="Name"
              className={classes.textField}
              margin="normal"
              value={name}
              onChange={this.handleChange('name')}
            />
            <TextField
              id="standard-name"
              label="Email"
              type="email"
              className={classes.textField}
              margin="normal"
              value={email}
              onChange={this.handleChange('email')}
            />
            <TextField
              id="standard-name"
              label="Address"
              className={classes.textField}
              margin="normal"
              value={address}
              onChange={this.handleChange('address')}
            />
            <TextField
              id="standard-name"
              label="Phone"
              className={classes.textField}
              margin="normal"
              value={phoneNumber}
              onChange={this.handleChange('phoneNumber')}
            />
            <TextField
              id="standard-name"
              label="Content"
              className={classes.textField}
              margin="normal"
              value={content}
              onChange={this.handleChange('content')}
            />
            <div className="form-bottom">
              <div className="tell-more" style={{ alignItems: 'center' }}>
                <span>Tell us more about your business!</span>
                <ArrowRightAlt />
              </div>
              <button type="submit" className="form-bottom-right">
                Send us
              </button>
            </div>
          </div>
          <div className="contact-content">
            <div className="dash" style={{ backgroundColor: '#ffffff', height: '4px', width: '60px' }} />
            <div className="contact-title">
              Contact
            </div>
            <p>
            64/1K Vo Oanh Street, 25 Ward,
            Binh Thanh District, Ho Chi Minh City
            </p>
            <p>
            +84 28 3620 5144
            </p>
            <p>
            contact@rockship.co
            </p>
          </div>
        </div>
      </section>
    );
  }
}

Contact.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: object.isRequired,
};

export default withStyles(styles)(Contact);
