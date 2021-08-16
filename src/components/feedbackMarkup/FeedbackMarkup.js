import React from 'react';

const feedbackMarkup = ({
  onPositiveFeedbackClick,
  onNeutralFeedbackClick,
  onNegativeFeedbackClick,
}) => {
  return (
    <>
      <h1 className="feedback_title"> Please leave your feedback</h1>
      <ul className="feedback_list">
        <li className="feedback_item">
          <button type="button" className="feedback_btn" onClick={onPositiveFeedbackClick}>
            good
          </button>
        </li>
        <li className="feedback_item">
          <button className="feedback_btn" onClick={onNeutralFeedbackClick}>
            neutral
          </button>
        </li>
        <li className="feedback_item">
          <button className="feedback_btn" onClick={onNegativeFeedbackClick}>
            bad
          </button>
        </li>
      </ul>
    </>
  );
};

export default feedbackMarkup;
