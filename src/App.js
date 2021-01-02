import React, { useState } from 'react';
import TimerTable from './Components/TimerTable';
import AddTimerForm from './Components/AddTimerForm';

const App = () => {
  const timerData = [
    { id: 1, name: 'Earl-Grey', duration: 5 },
    { id: 2, name: 'French Press', duration: 4 },
    { id: 3, name: 'Ribeye Steak-270 Temp', duration: 20 },
  ]
  const [timers, setTimers] = useState(timerData)
  const addTimer = (timer) => {
    timer.id = timers.length + 1
    setTimers([...timers, timer])
  }

  const deleteTimer = (id) => {
    setTimers(timers.filter((user) => user.id !== id))
  }
  
  return (
    <div className="container">
      <h1>Time Your Shit</h1>
      <div className="flex-row">
        <div className="flex-large">
         < AddTimerForm addTimer={addTimer}/>
        </div>
        <div className="flex-large">
          <TimerTable timers={timers} deleteTimer={deleteTimer}/>
        </div>
      </div>
    </div>
  )
}

export default App