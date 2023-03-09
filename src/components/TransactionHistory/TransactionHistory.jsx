import transactions from 'backendData/transactions.json';
import { Container } from 'components/TransactionHistory/TransactionHistory.styled';
import { TransactionTitle } from 'components/TransactionHistory/TransactionTitle/TransactionTitle'
import { TransactionList } from 'components/TransactionHistory/TransactionList/TransactionList'

export const TransactionHistory = () => {
  return (
    <Container>
      <TransactionTitle/>
      <TransactionList transactions={transactions}/>
    </Container>
  );
};