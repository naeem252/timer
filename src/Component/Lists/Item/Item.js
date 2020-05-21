import React from "react";

const item = (props) => (
  <li>
    <span>{props.item.minute}</span>
    <span>{props.item.seconds}</span>
    <span>{props.item.milis}</span>
  </li>
);

export default item;
