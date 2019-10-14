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
            <Link to={`/${this.props.user}/${this.props.group}/dashboard`}>
              Dashboard
            </Link>
            <Link to={`/${this.props.user}/${this.props.group}/calendar`}>
              Calendar
            </Link>
            <Link to={`/${this.props.user}/${this.props.group}/tasks`}>
              Tasks
            </Link>
            <Link to={`/${this.props.user}/${this.props.group}/files`}>
              Files
            </Link>
            <Link to={`/${this.props.user}/${this.props.group}/chat`}>
              Chat
            </Link>
            <Switch>
              {/* <Route path={'../'}>
                <Groups user={this.props.user} />
              </Route> */}
              <Route
                path={`/${this.props.user}/${this.props.group}/dashboard`}
              ></Route>
              <Route path={`/${this.props.user}/${this.props.group}/calendar`}>
                <Calendar user={this.props.user} group={this.props.group} />
              </Route>
              <Route path={`/${this.props.user}/${this.props.group}/tasks`}>
                <Tasks user={this.props.user} group={this.props.group} />
              </Route>
              <Route path={`/${this.props.user}/${this.props.group}/files`}>
                <Files user={this.props.user} group={this.props.group} />
              </Route>
              <Route path={`/${this.props.user}/${this.props.group}/chat`}>
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
