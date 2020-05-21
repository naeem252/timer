import React from "react";
import Timers from "../Component/Timers/Timers";

import Buttons from "../Component/Buttons/Buttons";
import Lists from "../Component/Lists/Lists";
import timer from "../Component/Timers/Timer/Timer";
import timers from "../Component/Timers/Timers";

// { minute: 10, seconds: 20, milis: 9 }

let startTimer;
let MINUTE = 0;
let SECOND = 0;
let MILIS = 0;

class App extends React.Component {
  state = {
    timers: [
      { name: "minute", val: MINUTE },
      { name: "second", val: SECOND },
      { name: "milis", val: MILIS },
    ],
    items: [],
    start: false,
    pause: false,
  };

  updateTimer = () => {
    MILIS++;
    if (MILIS === 10) {
      SECOND++;
      MILIS = 0;
    }

    if (SECOND === 60) {
      MINUTE++;
      SECOND = 0;
    }
    const newTimers = [...this.state.timers];
    newTimers[0].val = MINUTE;
    newTimers[1].val = SECOND;
    newTimers[2].val = MILIS;

    this.setState((prevState) => {
      return { timers: newTimers };
    });
  };

  // start app
  startHandler = (e) => {
    startTimer = setInterval(this.updateTimer, 100);

    this.setState({
      start: true,
      pause: false,
    });
  };

  leapHandler = () => {
    const newItem = { minute: MINUTE, seconds: SECOND, milis: MILIS * 100 };
    const newItemsArr = [...this.state.items];
    newItemsArr.unshift(newItem);
    this.setState({
      items: newItemsArr,
    });
  };

  pauseHandler = () => {
    clearInterval(startTimer);
    this.setState({
      pause: true,
      start: false,
    });
  };

  resetHandler = () => {
    clearInterval(startTimer);
    MINUTE = 0;
    SECOND = 0;
    MILIS = 0;
    this.setState({
      start: false,
      pause: false,
      items: [],
      timers: [
        { name: "minute", val: MINUTE },
        { name: "second", val: SECOND },
        { name: "milis", val: MILIS },
      ],
    });
  };

  render() {
    return (
      <div>
        <Timers timers={this.state.timers} />
        <Buttons
          start={this.state.start}
          startHandler={this.startHandler}
          leapHandler={this.leapHandler}
          resetHandler={this.resetHandler}
          pauseHandler={this.pauseHandler}
          pause={this.state.pause}
        />
        {this.state.items.length > 0 ? (
          <Lists items={this.state.items} />
        ) : null}
      </div>
    );
  }
}

export default App;
