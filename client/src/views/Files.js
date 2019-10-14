import React, { Component } from "react";
import "../App.css";

class Files extends Component {
  render() {
    return (
      <div>
        <heading>Files<br/></heading>
        <heading>User: {this.props.user}<br/></heading>
        <heading>Group: {this.props.group}</heading>
      </div>
    );
  }
}

export default Files;
