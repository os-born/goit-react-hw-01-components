import React from 'react';

const FriendListItem = ({ name, avatar, isOnline, id }) => {
  return (
    <li className="item" key={id}>
      <span className={isOnline ? 'statusIsOnline' : 'statusIsOffline'}></span>
      <img className="avatar" src={avatar} alt="{name}" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
