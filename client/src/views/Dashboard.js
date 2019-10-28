import React, { Component } from "react";
import "../App.css";

import Calendar from "./Calendar";
import Tasks from "./Tasks";
import Files from "./Files";
import Chat from "./Chat";
// import Groups from "./Groups";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      (
        <div>
          <heading>User: {this.props.user}</heading>
          <heading>Group: {this.props.group}</heading>
        </div>
      ),
      (
        <BrowserRouter>
          <div>
            {/* <Link to={'../'}>My Groups</Link> */}
            <Link to="/dashboard">
              Dashboard
            </Link>
            <Link to="/calendar">
              Calendar
            </Link>
            <Link to="/tasks">
              Tasks
            </Link>
            <Link to="/files">
              Files
            </Link>
            <Link to="/chat">
              Chat
            </Link>
            <Switch>
              {/* <Route path={'../'}>
                <Groups user={this.props.user} />
              </Route> */}
              <Route
                path="/dashboard"
              ></Route>
              <Route path="/calendar">
                <Calendar user={this.props.user} group={this.props.group} />
              </Route>
              <Route path="/tasks">
                <Tasks user={this.props.user} group={this.props.group} />
              </Route>
              <Route path="/files">
                <Files user={this.props.user} group={this.props.group} />
              </Route>
              <Route path="/chat">
                <Chat user={this.props.user} group={this.props.group} />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      )
    );
  }
}

export default Dashboard;
