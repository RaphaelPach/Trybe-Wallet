import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { rmCoin } from '../redux/actions';

class Table extends Component {
  handleClick = (id) => {
    const { expenses, dispatch } = this.props;
    const rm = expenses.filter((remove) => remove.id !== id);
    dispatch(rmCoin(rm));
  };

  render() {
    const { expenses } = this.props;
    console.log('log', expenses);
    return (
      <div>
        <table>
          <thead>
            <th>Descrição</th>
            <th>
              Tag
            </th>
            <th>
              Método de pagamento
            </th>
            <th>
              Valor
            </th>
            <th>
              Moeda
            </th>
            <th>
              Câmbio utilizado
            </th>
            <th>
              Valor convertido
            </th>
            <th>
              Moeda de conversão
            </th>
            <th>
              Editar/Excluir
            </th>
          </thead>
          <tbody>
            {' '}
            {expenses.map((coins) => (
              <tr key={ coins.id }>
                <td>{coins.description}</td>
                <td>{coins.tag}</td>
                <td>{coins.method}</td>
                <td>{Number(coins.value).toFixed(2)}</td>
                <td>{coins.exchangeRates[coins.currency].name}</td>
                <td>{Number(coins.exchangeRates[coins.currency].ask).toFixed(2)}</td>
                <td>
                  {(coins.exchangeRates[coins.currency].ask * Number(coins.value))
                    .toFixed(2)}
                  {' '}
                </td>
                <td>Real</td>
                <td>
                  {' '}
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => this.handleClick(coins.id) }
                  >
                    Apagar
                  </button>
                  {' '}
                </td>
              </tr>
            ))}
            {' '}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Table);
