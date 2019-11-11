import React from "react";
import RenderIfAId from "../components/RenderIfAId";
import UserContext from "../UserContext";
import GroupPane from "../components/GroupPane";
import API from "../utils/API";
import SecondaryNavbar from "../components/SecondaryNavbar";
var Highcharts = require("highcharts");

// var chart = new Highcharts.chart("container", {
//   chart: {
//     type: "bar"
//   },
//   title: {
//     text: "Fruit Consumption"
//   },
//   xAxis: {
//     categories: ["Apples", "Bananas", "Oranges"]
//   },
//   yAxis: {
//     title: {
//       text: "Fruit eaten"
//     }
//   },
//   series: [
//     {
//       name: "Jane",
//       data: [1, 0, 4]
//     },
//     {
//       name: "John",
//       data: [5, 7, 3]
//     }
//   ]
// });
export default class LandingAll extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <div className="text-center text-white">
            <h1 className="display-4">Welcome {user.username}</h1>
            {/* {<> <h2>User-ID: {user.user_id}</h2>
            <h1>Access Type:</h1>
            <h2>{user.type}</h2>
            <h1>Access Level:</h1>
            <h2>{user.access_id}</h2> </>} */}
            {user.access_id === 1 ? (
              <h1>Select a group to view</h1>
            ) : user.access_id === 2 ? (
              <h1>Select a course to view</h1>
            ) : user.access_id === 3 ? (
              <div>
                <h1>Analytics</h1>
                {/* <div>{chart}</div> */}
              </div>
            ) : (
              <h1 />
            )}
            {/*BIG NOTE TO SELF: Landing page can be changed based on access levels  for below:*/}
            {user.access_id === 1 ? (
              <SecondaryNavbar
                studentID={user.user_id}
                access_id={user.access_id}
              />
            ) : //  <GroupPane id= {user.user_id}></GroupPane>
            user.access_id === 2 ? (
              <SecondaryNavbar
                profID={user.user_id}
                access_id={user.access_id}
              />
            ) : user.access_id === 3 ? (
              <div>
                <h1>Analytics</h1>
                {/* <div>{chart}</div> */}
              </div>
            ) : (
              <h1 />
            )}
            {/* <RenderIfAId aId={1}> <GroupPane gId={user.user_id}> </GroupPane></RenderIfAId> */}
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
