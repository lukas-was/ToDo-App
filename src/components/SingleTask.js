import React from "react";

const SingleTask = (props) => {
  const { id, title, text, date, active, deadline, deadlineDate } = props.task;

  function count() {
    const startTime = new Date().getTime();
    const endTime = new Date(deadlineDate + " 23:59").getTime();
    const time = endTime - startTime;
    const days = time / (1000 * 60 * 60 * 24);
    const hrs = (days - Math.floor(days)) * 24;
    const min = (hrs - Math.floor(hrs)) * 60;
    const sec = (min - Math.floor(min)) * 60;

    const timeLeft = `dni: ${Math.floor(days)}, godzin: ${Math.floor(
      hrs
    )}, minut: ${Math.floor(min)}, sekund:${Math.floor(sec)}`;

    return timeLeft;
  }

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
      <p>utworzono: {new Date(date).toLocaleString()}</p>
      {deadline}
      {deadline && <p>termin: {deadlineDate}</p>}
      {deadline && <p>pozostało: {count()}</p>}
    </div>
  );
};

export default SingleTask;
