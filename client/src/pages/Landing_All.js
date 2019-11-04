import React from "react";
import RenderIfAId from "../components/RenderIfAId";
import UserContext from "../UserContext";

export default class LandingAll extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <div className="text-center text-white">
            <h1 className="display-4">Welcome {user.username}</h1>
            {/* <h2>User-ID: {user.user_id}</h2>
            <h1>Access Type:</h1>
            <h2>{user.type}</h2>
            <h1>Access Level:</h1>
            <h2>{user.access_id}</h2> */}
            {user.access_id === 1 ? (
              <h1>Here are your groups</h1>
            ) : user.access_id === 2 ? (
              <h1>Here are your courses</h1>
            ) : user.access_id === 3 ? (
              <h1>Manage stuff here</h1>
            ) : (
              <h1 />
            )}
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
