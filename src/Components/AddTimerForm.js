import React, { useState } from "react";

const AddTimerForm = (props) => {
  const initialFormState = { id: null, name: "", time: "" };
  const [timer, setTimer] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTimer({ ...timer, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!timer.name || !timer.username) return;

        props.addUser(timer);
        setTimer(initialFormState);
      }}
    >
      <label>What do you wanna time?</label>
      <input
        type="text"
        name="name"
        value={timer.name}
        onChange={handleInputChange}
      />
      <label>How long do you wanna time it for?</label>
      <input
        type="text"
        name="time"
        value={timer.time}
        onChange={handleInputChange}
      />
      <button>Add Timer!!</button>
    </form>
  );
};

export default AddTimerForm;
