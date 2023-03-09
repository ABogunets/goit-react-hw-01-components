import PropTypes from 'prop-types';
import {TransactionListItemWrapper, ListItem} from 'components/TransactionHistory/TransactionListItem/TransactionListItem.styled';

export const TransactionListItem = ({ type, amount, currency}) => {
  return (
    <TransactionListItemWrapper>
      <ListItem>{type}</ListItem>
      <ListItem>{amount}</ListItem>
      <ListItem>{currency}</ListItem>
    </TransactionListItemWrapper>
  )
}


TransactionListItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};