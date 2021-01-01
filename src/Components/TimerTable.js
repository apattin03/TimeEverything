import React from "react";
import Card from "./Card";

const TimerTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Your Timers</th>
      </tr>
    </thead>
    <tbody>
      {props.timers.length > 0 ? (
        props.timers.map((timer) => (
          <tr key={timer.id}>
            {/* <td>{timer.name}</td> */}
            <td>
              <Card/>
              {/* <button
                onClick={() => props.deleteUser(timer.id)}
                className="button muted-button"
              > */}
                {/* Delete
              </button> */}
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
);

export default TimerTable;
