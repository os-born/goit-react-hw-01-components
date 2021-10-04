// imr
import React from 'react';
import Profile from './profile/Profile';
import userData from '../data/user.json';
import Statistics from './statistics/Statistics';
import statisticalData from '../data/statistics.json';
import FriendList from './friends/friendList/FriendList';
import friends from '../data/friends.json';
import TransactionHistory from './transactions/TransactionHistory';
import transactions from '../data/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;

// rafce

// import React from 'react'

// const App = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default App
