import React from 'react';

function Navigation(props) {
  return (
    <nav className="Navigation">
      <a href="" className="text-white">{ props.title }</a>
      <span className="badge badge-pill badge-light ml-2">{ props.totalTasks}</span>
    </nav>
  );
}

export default Navigation;
