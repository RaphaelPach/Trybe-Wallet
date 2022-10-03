import { React, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWallet, getInp } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    this.getApi();
  }

  getApi = async () => {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const data = await fetch(url);
    const economia = await data.json();
    const { dispatch } = this.props;
    dispatch(getWallet(Object.keys(economia).filter((coin) => coin !== 'USDT')));
  };

  getApiRates = async () => {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const data = await fetch(url);
    const economia = await data.json();
    const { dispatch } = this.props;
    const exchangeRates = await economia;
    dispatch(getInp({
      ...this.state,
      exchangeRates,
    }));
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = async () => {
    await this.getApiRates();
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        WalletForm
        <form onChange={ this.handleChange }>
          Valor:
          <input
            name="value"
            value={ value }
            type="text"
            data-testid="value-input"
          />
          {' '}
          Despesa:
          <input
            name="description"
            value={ description }
            type="textbox"
            data-testid="description-input"
          />

          <select
            data-testid="currency-input"
            name="currency"
            value={ currency }
          >

            {
              currencies.map((cripto) => (
                <option
                  key={ cripto }
                  value={ cripto }
                >
                  {cripto}
                </option>
              ))
            }

          </select>
          <select data-testid="method-input" value={ method } name="method">
            <option>
              Dinheiro
            </option>
            <option>
              Cartão de crédito
            </option>
            <option>
              Cartão de débito
            </option>
          </select>
          <select data-testid="tag-input" value={ tag } name="tag">
            <option>
              Alimentação
            </option>
            <option>
              Lazer
            </option>
            <option>
              Trabalho
            </option>
            <option>
              Transporte
            </option>
            <option>
              Saúde
            </option>
          </select>
        </form>
        <button type="button" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
