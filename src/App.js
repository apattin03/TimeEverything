import React, { useState } from "react";
import TimerTable from "./Components/TimerTable";
import AddTimerForm from "./Components/AddTimerForm";

const App = () => {
  const timerData = [];
  const [timers, setTimers] = useState(timerData);
  const addTimer = (timer) => {
    timer.id = timers.length + 1;
    setTimers([...timers, timer]);
  };

  const deleteTimer = (id) => {
    setTimers(timers.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <h1>Time All The Things!</h1>
      <div className="flex-row">
        <div className="flex-large">
          <AddTimerForm addTimer={addTimer} />
        </div>
        <div className="flex-large">
          <TimerTable timers={timers} deleteTimer={deleteTimer} />
        </div>
      </div>
    </div>
  );
};

export default App;
