import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({items}) => {
    return <table className={css.transactionHistory}>
    <thead>
      <tr className={css.tr}>
        <th className={css.th}>Type</th>
        <th className={css.th}>Amount</th>
        <th className={css.th}>Currency</th>
      </tr>
    </thead>
  
    <tbody>
       { items.map(({id, type, amount, currency }) => {
        return  <tr>
        <td className={css.td}>{type}</td>
        <td className={css.td}>{amount}</td>
        <td className={css.td}>{currency}</td>
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