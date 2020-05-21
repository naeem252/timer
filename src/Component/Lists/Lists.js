import React from "react";
import Item from "./Item/Item";
import AllClass from "./list.module.css";

const lists = (props) => {
  return (
    <ul>
      <li>
        <span>Minute</span>
        <span>Seconds</span>
        <span>Mili Seconds</span>
      </li>
      {props.items.map((item) => {
        return <Item item={item} />;
      })}
    </ul>
  );
};

export default lists;
