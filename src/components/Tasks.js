import React from "react";
import SingleTask from "./SingleTask";
import "../styles/Tasks.css";

const Tasks = (props) => {
  let activeTasks = props.tasks.filter((task) => task.active);
  activeTasks = activeTasks.map((task) => (
    <SingleTask
      key={task.id}
      task={task}
      delete={props.delete}
      done={props.done}
    />
  ));

  return <div className="taskslist">{activeTasks}</div>;
};

export default Tasks;
