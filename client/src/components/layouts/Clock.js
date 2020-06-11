import React, { Component } from "react";

export class Clock extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState({ date: new Date() });
  };

  render() {
    const { date } = this.state;
    return <>{date.toLocaleString()}</>;
  }
}

export default Clock;
