import React from 'react';
import defaultImg from '../../profile/default_img_noPhoto.jpg';
import s from '../Friends.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ name = 'No name', avatar = defaultImg, status }) => {
  return (
    <li className={s.item}>
      <span className={status ? s.statusIsOnline : s.statusIsOffline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
