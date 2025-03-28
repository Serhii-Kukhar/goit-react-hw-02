import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [values, setValues] = useState(() => {
    const savedValues = localStorage.getItem("values");
    return savedValues ? JSON.parse(savedValues) : { good: 0, neutral: 0, bad: 0 };
  });
  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(values));
  }, [values]);



// 
  const [lastClicked, setLastClicked] = useState("");
  
  useEffect(() => {
    if (lastClicked) {
      const timer = setTimeout(() => setLastClicked(""), 300); 
      return () => clearTimeout(timer);
    }
  }, [lastClicked]);
// 

  const updateFeedback = (feedbackType) => {
    setValues((prevValues) => {
      const newValues = { ...prevValues, [feedbackType]: prevValues[feedbackType] + 1 };
      localStorage.setItem("values", JSON.stringify(newValues));
      return newValues;
    });
    setLastClicked(feedbackType);
  };

  const resetFeedback = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
    setLastClicked("");
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);


  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? <Feedback feedback={values} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} lastClicked={lastClicked} /> : <Notification />}
    </>
  );
};

export default App;
