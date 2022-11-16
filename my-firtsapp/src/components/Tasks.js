import React from 'react';

function Tasks(props) {
  let colores;
  switch (props.priority) {
    case "low": colores = "low-level"
      break;
    case "medium": colores = "medium-level"
      break;
    case "high": colores = "high-level"
      break;
    default: colores = "noDificult-level"
  }
  return (
    <div className="card m-2" style={{width: "18rem"}}>
      <div className="card-body">
        <h1 className="card-title">{props.title}</h1>
        <p className="card-text">{props.description}</p>
        <a href="" className={`btn hover-level ${colores}`}>{props.responsible}</a>
      </div>
    </div>
  );
}

export default Tasks;
