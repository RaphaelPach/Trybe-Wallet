import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    console.log('log', email);
    return (
      <div>
        Header
        <p data-testid="email-field">
          {email}
        </p>
        <h2 data-testid="total-field"> 0 </h2>
        <h3 data-testid="header-currency-field"> BRL </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Header);
