import FriendListItem from 'Components/friendListItem/FriendListItem';
import React from 'react';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          name={friend.name}
          avatar={friend.avatar}
          status={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

export default FriendList;
