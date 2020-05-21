import React from "react";
import allClass from "./timer.module.css";

const timer = (props) => {
  return (
    <div className={allClass[props.timer.name]}>
      {props.timer.val < 10 ? `0${props.timer.val}` : props.timer.val}
    </div>
  );
};

export default timer;
