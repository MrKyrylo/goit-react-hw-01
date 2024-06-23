import './App.css';

import Profile from './profile.jsx';
import FriendList from './friendList.jsx';
import TransactionHistory from './transactionHistory.jsx';

import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';

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