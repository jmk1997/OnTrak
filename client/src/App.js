import React, { Component } from "react";
import "./App.css";

import Groups from "./views/Groups"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }
  users = [1, 2, 3, 4];
  render() {
    return (
      <BrowserRouter>
        <div>
          <heading>Login to:</heading>
          {this.users.map(u => (
            <Link to="/groups"><button>User {u}</button></Link>
          ))}
          <Switch>
            {this.users.map(u => (
              <Route path="/groups">
                <Groups user={u} />
              </Route>
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
