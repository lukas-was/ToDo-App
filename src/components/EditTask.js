import React, { Component } from "react";
import "../styles/AddTask.css";

class EditTask extends Component {
  state = this.getEditTask();

  getEditTask() {
    const idEditTask = parseInt(this.props.match.params.id);
    const tasks = [...this.props.tasks];
    const editTask = tasks.filter((task) => task.id === idEditTask);

    return {
      id: idEditTask,
      title: editTask[0].title,
      text: editTask[0].text,
      date: editTask[0].date,
      deadline: editTask[0].deadline,
      deadlineDate: editTask[0].deadlineDate,
      isEdited: false,
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (e.target.type === "checkbox") {
      this.setState({
        [name]: !this.state[name],
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  toggleIsEdited = () => this.setState({ isEdited: false });

  handleSubmit = (e) => {
    const { id, title, text, date, deadline, deadlineDate } = this.state;
    const editCorrect = this.props.edit(
      id,
      title,
      text,
      date,
      deadline,
      deadlineDate,
      e
    );

    if (editCorrect) {
      this.setState({
        title: "",
        text: "",
        deadline: false,
        deadlineDate: new Date().toISOString().slice(0, 10),
        isEdited: true,
      });
    }
    setTimeout(this.toggleIsEdited, 600);
  };
  render() {
    const { title, text, deadline, deadlineDate, isEdited } = this.state;

    return (
      <div className="taskform" style={{ backgroundColor: "rgb(70, 70, 70)" }}>
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="title">Tytuł zadania</label>
          <input
            onChange={this.handleChange}
            value={title}
            name="title"
            type="text"
            id="title"
            maxLength={25}
          />

          <label htmlFor="text">Opis zadania</label>
          <textarea
            onChange={this.handleChange}
            value={text}
            name="text"
            id="text"
          ></textarea>

          <input
            onChange={this.handleChange}
            checked={deadline}
            type="checkbox"
            name="deadline"
            id="deadline"
          />
          <label htmlFor="deadline">Deadline</label>
          {deadline && (
            <input
              value={deadlineDate}
              onChange={this.handleChange}
              type="date"
              name="deadlineDate"
              id="deadlineDate"
            />
          )}
          {title && text ? (
            <button className="on">Zapisz</button>
          ) : (
            <button className="off" disabled>
              Zapisz
            </button>
          )}
          {isEdited && <p className="taskmessage">Zapisano</p>}
        </form>
      </div>
    );
  }
}

export default EditTask;
