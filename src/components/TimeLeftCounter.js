import React, { Component } from "react";

class TimeLeftCounter extends Component {
  state = {
    currentTime: new Date().getTime(),
  };

  setTime = () => {
    const currentTime = new Date().getTime();
    this.setState({
      currentTime,
    });
  };

  componentDidMount() {
    this.indexOfInterval = setInterval(this.setTime, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.indexOfInterval);
  }
  render() {
    const currentTime = this.state.currentTime;
    const endTime = new Date(this.props.deadlineDate + " 23:59").getTime();
    const time = endTime - currentTime;
    const days = time / (1000 * 60 * 60 * 24);
    const hrs = (days - Math.floor(days)) * 24;
    const min = (hrs - Math.floor(hrs)) * 60;
    const sec = (min - Math.floor(min)) * 60;

    const d = Math.floor(days);
    const h = Math.floor(hrs);
    const m = Math.floor(min);
    const s = Math.floor(sec);

    return (
      <p>
        pozostało: {d} {d === 1 ? "dzień" : "dni"}, {h < 10 ? "0" + h : h}:
        {m < 10 ? "0" + m : m}:{s < 10 ? "0" + s : s}
      </p>
    );
  }
}

export default TimeLeftCounter;
