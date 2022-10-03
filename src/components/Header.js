import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  count = () => {
    const { expenses } = this.props;
    let mult = 0;
    expenses.forEach((element) => {
      mult += Number(element.exchangeRates[element.currency].ask) * Number(element.value);
    });
    console.log(mult);
    return mult.toFixed(2);
  };

  render() {
    const { email, expenses } = this.props;
    console.log('log', email);
    return (
      <div>
        Header
        <p data-testid="email-field">
          {email}
        </p>
        <p data-testid="total-field">
          {
            expenses.length > 0 ? this.count() : Number(0)
          }
        </p>
        <p data-testid="header-currency-field"> BRL </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Header);
