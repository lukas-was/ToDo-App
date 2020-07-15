import React, { Component } from "react";
import "../styles/AddTask.css";

class AddTask extends Component {
  state = {
    title: "",
    text: "",
    deadline: false,
    deadlineDate: new Date().toISOString().slice(0, 10),
  };

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

  handleSubmit = (e) => {
    const { title, text, deadline, deadlineDate } = this.state;
    this.props.add(title, text, deadline, deadlineDate, e);

    this.setState({
      title: "",
      text: "",
      deadline: false,
      deadlineDate: new Date().toISOString().slice(0, 10),
    });
  };
  render() {
    const { title, text, deadline, deadlineDate } = this.state;

    return (
      <div className="taskform">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="title">Tytuł zadania</label>
          <input
            onChange={this.handleChange}
            vlaue={title}
            name="title"
            type="text"
            id="title"
          />
          <label htmlFor="text">Opis zadania</label>
          <textarea
            onChange={this.handleChange}
            vlaue={text}
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
            <button>Dodaj zadanie</button>
          ) : (
            <button style={{ backgroundColor: "#bbb" }} disabled>
              Dodaj zadanie
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default AddTask;
