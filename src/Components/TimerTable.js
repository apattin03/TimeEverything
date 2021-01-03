import React from "react";
import Timer from "./Timer";

const TimerTable = (props) => {
const time = new Date();
time.setSeconds(time.getSeconds() + props.duration)
  return(
  <table>
    <thead>
      <tr>
        <th>Your Timers</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {props.timers.length > 0 ? (
        props.timers.map((timer) => (
          <tr key={timer.id}>
            <td>{timer.name}</td>
            <td><button  onClick={() => props.deleteTimer(timer.id)}
                className="button muted-button">Delete</button></td>
            <td>
             <Timer expiryTimestamp={time} duration = {timer.duration}/>
             {console.log(timer)}
            </td>
      
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No timers</td>
        </tr>
      )}
    </tbody>
  </table>
  )};

export default TimerTable;
