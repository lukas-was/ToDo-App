import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Tasks from "./components/Tasks";
import DoneTasks from "./components/DoneTasks";
import AddTask from "./components/AddTask";

class App extends React.Component {
  index = 3;
  state = {
    tasks: [
      {
        id: 0,
        title: "Auto",
        text: "Umyj Kangura",
        date: "2020-07-20",
        active: false,
      },
      {
        id: 1,
        title: "Auto",
        text: "Umyj Fabię",
        date: "2020-08-10",
        active: true,
      },
      {
        id: 2,
        title: "Nauka",
        text: "Przeczytaj książkę",
        date: "2020-12-28",
        active: true,
      },
    ],
  };

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({ tasks });
  };

  makeTaskDone = (id) => {
    let tasks = [].concat(this.state.tasks);

    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
      }
    });
    this.setState({ tasks });
  };

  addTask = (title, text, deadline, deadlineDate, e) => {
    e.preventDefault();

    const newTask = {
      id: this.index,
      title,
      text,
      date: new Date().getTime(),
      active: true,
      deadline,
      deadlineDate,
    };

    this.index++;

    let tasks = [...this.state.tasks];
    tasks.push(newTask);
    this.setState({
      tasks,
    });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <Navigation />
          </nav>
          <main>
            <Switch>
              <Route path="/tasks">
                <Tasks
                  tasks={this.state.tasks}
                  delete={this.deleteTask}
                  done={this.makeTaskDone}
                />
              </Route>
              <Route path="/done">
                <DoneTasks tasks={this.state.tasks} delete={this.deleteTask} />
              </Route>
              <Route path="/add">
                <AddTask add={this.addTask} />
              </Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
