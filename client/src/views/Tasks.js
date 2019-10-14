import React, { Component } from "react";
import "../App.css";

class Tasks extends Component {
  render() {
    return (
      <div>
        <heading>Tasks<br/></heading>
        <heading>User: {this.props.user}<br/></heading>
        <heading>Group: {this.props.group}</heading>
      </div>
    );
  }
}

export default Tasks;
