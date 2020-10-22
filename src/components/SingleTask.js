import React from "react";
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
    <div>
      <h3 className="title">
        {title}
        <span className="btnpanel">
          {active && (
            <button title="zrobione" onClick={() => props.done(id)}>
              <i className="far fa-check-square"></i>
            </button>
          )}
          <button title="usuń" onClick={() => props.delete(id)}>
            <i className="far fa-trash-alt"></i>
          </button>
        </span>
      </h3>
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
