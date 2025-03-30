import s from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <p className={s.feedbackItem}>Good: {feedback.good}</p>
      <p className={s.feedbackItem}>Neutral: {feedback.neutral}</p>
      <p className={s.feedbackItem}>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
