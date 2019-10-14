import React, { Component } from "react";
import "../App.css";

class Calendar extends Component {
  render() {
    return (
      <div>
        <heading>Calendar<br/></heading>
        <heading>User: {this.props.user}<br/></heading>
        <heading>Group: {this.props.group}</heading>
      </div>
    );
  }
}

export default Calendar;
