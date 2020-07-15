import React from "react";
import TimeLeftCounter from "./TimeLeftCounter";

const SingleTask = (props) => {
  const { id, title, text, date, active, deadline, deadlineDate } = props.task;

  return (
    <div>
      <h3>
        {title}
        <span className="btnpanel">
          <button onClick={() => props.delete(id)}>usuń</button>
          {active && <button onClick={() => props.done(id)}>zrobione</button>}
          {active && <button>edytuj</button>}
        </span>
      </h3>
      <p>
        <strong>{text}</strong>
      </p>
      <p>dodano: {new Date(date).toLocaleString()}</p>
      {deadline}
      {deadline && <p>termin: {deadlineDate}</p>}
      {deadline && <TimeLeftCounter deadlineDate={deadlineDate} />}
    </div>
  );
};

export default SingleTask;
