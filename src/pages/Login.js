import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    inputEmail: '',
    password: '',
    isDisabled: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.verifyBtn();
    });
  };

  verifyBtn = () => {
    const { inputEmail, password } = this.state;
    const Regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const verifyEmail = Regex.test(inputEmail);
    console.log('log', verifyEmail);
    const number = 6;
    const verifyPassword = password.length >= number;
    this.setState({ isDisabled: !(verifyEmail && verifyPassword) });
  };

  btnSubmit = (e) => {
    e.preventDefault();
    const { history, dispatch } = this.props;
    const { inputEmail } = this.state;
    dispatch(getEmail(inputEmail));
    history.push('/carteira');
  };

  render() {
    const { isDisabled } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="inputEmail">
            Email
            <input
              id="inputEmail"
              name="inputEmail"
              type="email"
              onChange={ this.handleChange }
              data-testid="email-input"
              required
            />
          </label>
          <label htmlFor="senha">
            Senha
            <input
              id="senha"
              name="password"
              type="password"
              onChange={ this.handleChange }
              data-testid="password-input"
              required
            />
          </label>
          <button
            type="submit"
            onClick={ this.btnSubmit }
            disabled={ isDisabled }
          >
            ENTRAR
          </button>
        </form>
      </div>

    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
