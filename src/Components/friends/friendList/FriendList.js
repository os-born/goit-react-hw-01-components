import React from 'react';
import FriendListItem from 'Components/friends/friendListItem/FriendListItem';
import PropTypes from 'prop-types';
import s from '../Friends.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friend__list}>
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

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string.isRequired,
      status: PropTypes.bool.isRequired,
      key: PropTypes.number.isRequired,
    }),
  ),
};
