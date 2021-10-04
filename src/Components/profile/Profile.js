import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../profile/default_img_noPhoto.jpg';
import s from '../profile/Profile.module.css';

const Profile = ({
  name = 'No name',
  tag,
  location,
  avatar = defaultImg,
  stats,
}) => {
  return (
    <div className={s.prof}>
      <div className={s.prof__description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={s.prof__avatar}
        />
        <p className={s.prof__name}>{name}</p>
        <p className={s.prof__tag}>@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.stats__item}>
          <span className="label">Followers: </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={s.stats__item}>
          <span className="label">Views: </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={s.stats__item}>
          <span className="label">Likes: </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};
