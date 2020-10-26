import React, { Component } from "react";
import "../styles/AddTask.css";

class AddTask extends Component {
  state = {
    title: "",
    text: "",
    deadline: false,
    deadlineDate: new Date().toISOString().slice(0, 10),
    isAdded: false,
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

  toggleIsAdded = () => this.setState({ isAdded: false });

  handleSubmit = (e) => {
    const { title, text, deadline, deadlineDate } = this.state;
    const isAdded = this.props.add(title, text, deadline, deadlineDate, e);

    if (isAdded) {
      this.setState({
        title: "",
        text: "",
        deadline: false,
        deadlineDate: new Date().toISOString().slice(0, 10),
        isAdded: true,
      });
    }
    setTimeout(this.toggleIsAdded, 600);
  };
  render() {
    const { title, text, deadline, deadlineDate, isAdded } = this.state;

    return (
      <div className="taskform">
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
            <button>Dodaj zadanie</button>
          ) : (
            <button style={{ backgroundColor: "#bbb" }} disabled>
              Dodaj zadanie
            </button>
          )}
          {isAdded && <p className="taskmessage">Dodano</p>}
        </form>
      </div>
    );
  }
}

export default AddTask;
