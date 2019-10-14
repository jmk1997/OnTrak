import React, { Component } from "react";
import "../App.css";

class Chat extends Component {
  render() {
    return (
      <div>
        <heading>Chat<br/></heading>
        <heading>User: {this.props.user}<br/></heading>
        <heading>Group: {this.props.group}</heading>
      </div>
    );
  }
}

export default Chat;
