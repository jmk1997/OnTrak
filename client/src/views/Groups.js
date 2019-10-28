import React, { Component } from "react";
import "../App.css";

import Dashboard from "./Dashboard";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class Groups extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  groups = [1, 2, 3, 4];
  render() {
    return (
      <BrowserRouter>
        <div>
          <heading>Select group</heading>
          {this.groups.map(g => (
            <Link to="/dashboard"><button>Group {g}</button></Link>
          ))}
          <Switch>
            {this.groups.map(g => (
              <Route path="/dashboard">
                <Dashboard user={this.props.user} group={g} />
              </Route>
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Groups;
