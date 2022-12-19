import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Container } from './App.styled';

import user from '../../jsonFiles/user.json';
import data from '../../jsonFiles/data.json';
import friends from '../../jsonFiles/friends.json';
import transactions from '../../jsonFiles/transactions.json';

export const App = () => {
  const { username, tag, location, stats, avatar } = user;

  return (
    <Container>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </Container>
  );
};
