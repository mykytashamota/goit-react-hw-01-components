import ProfileUser from './profile/profile';
import user from 'path/to/user.json';

import StatisticsUser from './statistics/statistics';
import data from 'path/to/data.json';

import FriendList from 'components/friendList/friendList';
import friends from 'path/to/friends.json';

import TransactionHistory from 'components/transactionHistory/transactionHistory';
import transactions from 'path/to/transactions.json';

export const App = () => {
  return (
    <div>
      <ProfileUser
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticsUser title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
