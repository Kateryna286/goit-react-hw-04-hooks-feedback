import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.container}>
    {options.map(option => (
      <button
        key={option}
        className={s.button}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  option: PropTypes.array,
  children: PropTypes.func,
};

export default FeedbackOptions;
