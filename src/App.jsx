import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
// import "modern-normalize";

const App = () => {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const totalFeedback = values.good + values.neutral + values.bad;

  const updateFeedback = (feedbackType) => {
    setValues((prevValues) => ({
      ...prevValues,
      [feedbackType]: prevValues[feedbackType] + 1,
    }));
  };

  const resetFeedback = ()=>{
    setValues({
      good:0,
      neutral:0,
      bad:0
    })
  }

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (<Feedback feedback={values} />) : <Notification />}
    </>
  );
};

export default App;
