import './src/App.css';

import Profile from './src/components/profile.jsx';
import FriendList from './src/components/friendList.jsx';
import TransactionHistory from './src/components/transactionHistory.jsx';

import userData from './src/userData.json';
import friends from './src/friends.json';
import transactions from './src/transactions.json';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;