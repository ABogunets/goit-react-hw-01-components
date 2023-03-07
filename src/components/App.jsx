import user from 'user.json';

import { Container } from "./App.styled";
import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";



// import {FriendList } from "./components/FriendList/FriendList";
// import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";


export const App = () => {
  return (
    <Container>
      <Profile userData={user} />
      <Statistics/>
 
    </Container>

    // <FriendList></FriendList>
    // <TransactionHistory></TransactionHistory> 

  );
};
