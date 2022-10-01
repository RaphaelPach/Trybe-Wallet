import { React, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWallet } from '../redux/actions';

class WalletForm extends Component {
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

  render() {
    const { currencies } = this.props;
    return (
      <div>
        WalletForm
        <form>
          Valor:
          <input
            name="Valor"
            type="text"
            data-testid="value-input"
          />
          {' '}
          Despesa:
          <input
            name="Despesa"
            type="textbox"
            data-testid="description-input"
          />

          <select data-testid="currency-input" name="currencies">

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
          <select data-testid="method-input">
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
          <select data-testid="tag-input">
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
