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
    if (name === "deadline") {
      this.setState({
        deadline: !this.state.deadline,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };
  render() {
    const { title, text, deadline, deadlineDate } = this.state;

    return (
      <div className="taskform">
        <form
          onSubmit={(e) =>
            this.props.add(title, text, deadline, deadlineDate, e)
          }
        >
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

          <button>Dodaj zadanie</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
