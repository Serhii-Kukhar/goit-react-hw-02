import s from "./Feedback.module.css";

const Feedback = ({
  feedback,
  totalFeedback,
  positiveFeedback,
  lastClicked,
}) => {
  return (
    <div>
      <p
        className={`${s.feedbackItem} ${
          lastClicked === "good" ? s.highlight : ""
        }`}
      >
        Good: {feedback.good}
      </p>
      <p
        className={`${s.feedbackItem} ${
          lastClicked === "neutral" ? s.highlight : ""
        }`}
      >
        Neutral: {feedback.neutral}
      </p>
      <p
        className={`${s.feedbackItem} ${
          lastClicked === "bad" ? s.highlight : ""
        }`}
      >
        Bad: {feedback.bad}
      </p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
