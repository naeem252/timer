import React from "react";
import Timer from "./Timer/Timer";

import AllClass from "./timers.module.css";

const timers = (props) => {
  return (
    <div className={AllClass.Timers}>
      {props.timers.map((timer) => {
        return <Timer key={timer.name} timer={timer} />;
      })}
    </div>
  );
};

export default timers;
