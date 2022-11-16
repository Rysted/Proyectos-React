import React from "react";
import logo from "../logo.svg";

function TodoForm() {
  let state = {
    title: "",
    responsible: "",
    description: "",
    priority: "",
  };
  handleInput = handleInput.bind(this);

  function handleInput(e) {
    const { value, name } = e.target;
    state = {
      [name]: value,
    };
    console.log(state);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("sending the data...");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="title"
          name="title"
          onChange={handleInput}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="responsible"
          name="responsible"
          onChange={handleInput}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="description"
          name="description"
          onChange={handleInput}
        />
      </div>
      <div className="mb-3">
        <select className="form-select" name="priority" onChange={handleInput}>
          <option>Select a Priority</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

export default TodoForm;
