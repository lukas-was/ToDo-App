import React from "react";
import { Link } from "react-router-dom";
import TimeLeftCounter from "./TimeLeftCounter";

const SingleTask = (props) => {
  const {
    id,
    title,
    text,
    date,
    active,
    deadline,
    deadlineDate,
    doneDate,
  } = props.task;

  return (
    <div className="task">
      <div className="header">
        <div id="title">{title}</div>
        <div className="btnpanel">
          {active && (
            <button title="zrobione" onClick={() => props.done(id)}>
              <i className="far fa-check-square"></i>
            </button>
          )}
          <button title="usuń" onClick={() => props.delete(id)}>
            <i className="far fa-trash-alt"></i>
          </button>
          {active && (
            <Link title="edytuj" to={`edit/${id}`}>
              <i className="far fa-edit"></i>
            </Link>
          )}
        </div>
      </div>
      <p className="text">{text}</p>
      <p>dodano: {new Date(date).toLocaleString()}</p>
      {deadline}
      {deadline && <p>termin: {deadlineDate}</p>}
      {deadline && active && <TimeLeftCounter deadlineDate={deadlineDate} />}
      {!active && <p>wykonano: {new Date(doneDate).toLocaleString()}</p>}
    </div>
  );
};

export default SingleTask;
