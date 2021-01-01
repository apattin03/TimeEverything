import React, { useState } from 'react';
import TimerTable from './Components/TimerTable';
import AddTimerForm from './Components/AddTimerForm';

const App = () => {
  const timerData = [
    { id: 1, name: 'Earl-Grey', time: 5 },
    { id: 2, name: 'Green Tea', time: 4 },
    { id: 3, name: 'Ribeye Steak-270 Temp', time: 20 },


    //this should be where I put my GetALL() request
  ]

  const [timers, setTimers] = useState(timerData)

  const addTimer = (timer) => {
    //make api request here. Axios???
  }

  const deleteTimer = (id) => {
    // setUsers(users.filter((user) => user.id !== id))
  }

  const showTimer = (id) => {
    
  }

  return (
    <div className="container">
      <h1>Time Your Shit</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Timer</h2>
         < AddTimerForm/>
        </div>
        <div className="flex-large">
          <TimerTable timers={timers} deleteTimer={deleteTimer}/>
        </div>
      </div>
    </div>
  )
}

export default App