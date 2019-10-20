import React from "react";

const TaskCard = props => {
  return(
  <div className="task-card">
      <label for={props.name} className="form-label">
        {props.title}
      </label>
     <body>{props.desc}</body>

  </div>
   );
  };

export default TaskCard;
