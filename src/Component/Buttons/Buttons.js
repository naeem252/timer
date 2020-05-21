import React from "react";
import allClass from "./button.module.css";

const buttons = (props) => {
  let buttons = (
    <button onClick={props.startHandler} className={allClass.Start}>
      Start
    </button>
  );

  if (props.start) {
    buttons = (
      <React.Fragment>
        <button onClick={props.pauseHandler} className={allClass.Pause}>
          Pause
        </button>
        <button onClick={props.leapHandler} className={allClass.Leap}>
          Leap
        </button>
        <button onClick={props.resetHandler} className={allClass.Reset}>
          Reset
        </button>
      </React.Fragment>
    );
  }

  if (props.pause) {
    buttons = (
      <React.Fragment>
        <button onClick={props.startHandler} className={allClass.Start}>
          Start
        </button>
        <button onClick={props.resetHandler} className={allClass.Reset}>
          Reset
        </button>
      </React.Fragment>
    );
  }

  return <div>{buttons}</div>;
};

export default buttons;
