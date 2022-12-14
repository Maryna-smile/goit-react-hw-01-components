import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
    return <table class="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody>
       { items.map(({id, type, amount, currency }) => {
        return  <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
       })}
        </tbody>
  </table>
}

TransactionHistory.prototype = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
  };