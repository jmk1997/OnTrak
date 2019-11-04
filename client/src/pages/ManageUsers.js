import React from "react";

import UserContext from "../UserContext";

export default class ManageUsers extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => <h1>Manage Users</h1>}
      </UserContext.Consumer>
    );
  }
}
