import React from 'react';

const feedbackMarkup = ({ options, leaveFeedback }) => {
  return (
    <>
      <h1 className="feedback_title"> Please leave your feedback</h1>
      <ul className="feedback_list">
        {options.map(name => (
          <li className="feedback_item">
            <button type="button" className="feedback_btn" onClick={() => leaveFeedback(name)}>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default feedbackMarkup;
