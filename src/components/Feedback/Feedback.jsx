import React from "react";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul>
        <li>Good:{feedback.good}</li>
        <li>Neutral:{feedback.neutral}</li>
        <li>Bad:{feedback.bad}</li>
        <li>Total feedback: {totalFeedback}</li>
        <li>Positive feedback: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
