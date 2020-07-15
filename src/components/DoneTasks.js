import React from "react";
import SingleTask from "./SingleTask";
import "../styles/Tasks.css";

const DoneTasks = (props) => {
  let doneTasks = props.tasks.filter((task) => !task.active);
  doneTasks = doneTasks.map((task) => (
    <SingleTask key={task.id} task={task} delete={props.delete} />
  ));

  return <div className="taskslist">{doneTasks}</div>;
};

export default DoneTasks;
