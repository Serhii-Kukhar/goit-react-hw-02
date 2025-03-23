import React from "react";
import s from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback}) => {
  return (
    <div className={s.buttonBox}>
      <button
        className={`${s.button} ${s.good}`}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={`${s.button} ${s.neutral}`}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={`${s.button} ${s.bad}`}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && <div><button className={`${s.button} ${s.reset}`} onClick={resetFeedback}>Reset</button></div>
    }
    </div>
  );
};

export default Options;
