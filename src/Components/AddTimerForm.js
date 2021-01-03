import React, { useState } from "react";

const AddTimerForm = (props) => {
  const initialFormState = { id: null, name: "", duration: "" };
  const [timer, setTimer] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(event);
    setTimer({ ...timer, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!timer.name || !timer.duration) return;

        props.addTimer(timer);
        setTimer(initialFormState);
      }}
    >
      <label>What are you looking to time?</label>
      <input
        type="text"
        name="name"
        value={timer.name}
        onChange={handleInputChange}
      />
      <label>How many minutes do you wanna time it for?</label>
      <input
        type="text"
        name="duration"
        value={timer.duration}
        onChange={handleInputChange}
      />
      <button>Add Timer!!</button>
    </form>
  );
};

export default AddTimerForm;
