import PropTypes from 'prop-types';
import {TransactionListWrapper} from 'components/TransactionHistory/TransactionList/TransactionList.styled';
import { TransactionListItem } from 'components/TransactionHistory/TransactionListItem/TransactionListItem';


export const TransactionList = ({ transactions }) => {
  return (
    <TransactionListWrapper>
      {transactions.map(({ id, type, amount, currency }) => (
        <TransactionListItem
          key={id}
          type={type}
          amount={amount}
          currency={currency}
          />
      ))}
    </TransactionListWrapper>
  )
}

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      }),
    ),
};