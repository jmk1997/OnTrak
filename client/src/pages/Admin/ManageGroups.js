import React from "react";
import UserContext from "../../UserContext";

export default class ManageGroups extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => <h1>Manage Groups</h1>}
      </UserContext.Consumer>
    );
  }
}
