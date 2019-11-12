import HighchartsReact from "highcharts-react-official";
import React from "react";
import SecondaryNavbar from "../components/SecondaryNavbar";
import UserContext from "../UserContext";
var moment = require("moment");
var Highcharts = require("highcharts");

var chart1 = (
  <HighchartsReact
    highcharts={Highcharts}
    options={{
      chart: {
        type: "column"
      },
      title: {
        text: "Daily Task Usage"
      },
      xAxis: {
        categories: ["New", "Completed", "Rated"]
      },
      yAxis: {
        title: {
          text: "Tasks"
        }
      },
      series: [
        // {
        //   name: "Jane",
        //   data: [1, 0, 4]
        // },
        {
          name: "Today",
          data: [30, 15, 20]
        },
        {
          name: "Yesterday",
          data: [35, 18, 29]
        }
      ]
    }}
  />
);
// console.log([...new Array(30)].map((i, idx) => moment().startOf("day").subtract(idx, "days").toISOString().substr(5,5)))
var chart2 = (
  <HighchartsReact
    highcharts={Highcharts}
    options={{
      chart: { type: "line" },
      title: { text: "Daily Logins" },
      xAxis: {
        title: {
          text: "Date"
        }
        // labels: [...new Array(30)].map((i, idx) => moment().startOf("day").subtract(idx, "days").toISOString().substr(5,5))
        // dateTimeLabelFormats:
      },
      yAxis: {
        title: {
          text: "Logins"
        }
      },
      series: [
        {
          name: "Student",
          data: Array.from({ length: 31 }, () =>
            Math.floor(Math.random() * 1000)
          )
        },
        {
          name: "Professor",
          data: Array.from({ length: 31 }, () =>
            Math.floor(Math.random() * 1000)
          )
        },
        {
          name: "Admin",
          data: Array.from({ length: 31 }, () =>
            Math.floor(Math.random() * 1000)
          )
        }
      ]
    }}
  />
);

export default class LandingAll extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <div className="text-center text-white">
            {/* <h1 className="display-4">Welcome {user.username}</h1> */}
            {/* {<> <h2>User-ID: {user.user_id}</h2>
            <h1>Access Type:</h1>
            <h2>{user.type}</h2>
            <h1>Access Level:</h1>
            <h2>{user.access_id}</h2> </>} */}
            {user.access_id === 1 ? (
              <div/>
              // <h1>Select a group to view</h1>
            ) : user.access_id === 2 ? (
              <div/>
              // <h1>Select a course to view</h1>
            ) : user.access_id === 3 ? (
              <div>
                <h1>System Analytics</h1>
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
                {/* <h1>Analytics</h1> */}
                <div>{chart1}</div>
                <div>{chart2}</div>
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
