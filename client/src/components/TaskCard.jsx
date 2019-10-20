import React from "react";

const TaskCard = props => {
  return(
  <div className="task-card">
      <label for={props.name} className="form-label">
        {props.title}
      </label>
     {props.desc}

  </div>
   );
  };

export default TaskCard;
