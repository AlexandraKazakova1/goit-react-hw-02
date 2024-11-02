import React from "react";
import s from "./Feedback.module.css";
const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul className={s.list}>
        <li className={s.item}>Good: {feedback.good}</li>
        <li className={s.item}>Neutral: {feedback.neutral}</li>
        <li className={s.item}>Bad: {feedback.bad}</li>
        <li className={s.item}>Total feedback: {totalFeedback}</li>
        <li className={s.item}>Positive feedback: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
