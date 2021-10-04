import React from 'react';
import PropTypes from 'prop-types';
import s from '../statistics/Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.stat}>
      <h2 className={s.stat__title}>{title}</h2>
      <ul className={s.stat__list}>
        {stats.map(stat => (
          <li
            className={s.stat__item}
            key={stat.id}
            style={{
              backgroundColor: `rgb(${randomColor()},${randomColor()},${randomColor()}, 0.2)`,
            }}
          >
            <span className={s.stat__itemLabel}>{stat.label}</span>
            <span className="percentage">{stat.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

const randomColor = () => {
  return Math.floor(Math.random() * 255);
};

Statistics.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
