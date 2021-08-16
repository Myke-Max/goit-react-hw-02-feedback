import React from 'react';

const statisticMarkup = ({
  positiveFeedbackValue,
  neutralFeedbackValue,
  badFeedbackValue,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <>
      <h2 className="statistics_title">Statistics</h2>
      <ul className="statistics_list">
        <li className="statistics_item">
          <span className="statistics_value">good:{positiveFeedbackValue}</span>
        </li>
        <li className="statistics_item">
          <span className="statistics_value">neutral:{neutralFeedbackValue} </span>
        </li>
        <li className="statistics_item">
          <span className="statistics_value">bad:{badFeedbackValue}</span>
        </li>
        <li className="statistics_item">
          <span className="statistics_value">Total: {totalFeedback} </span>
        </li>
        <li className="statistics_item">
          <span className="statistics_value">Positive feedback:{positiveFeedbackPercentage}%</span>
        </li>
      </ul>
    </>
  );
};

export default statisticMarkup;
