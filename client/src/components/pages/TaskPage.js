import HighchartsReact from "highcharts-react-official";
import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { withRouter } from "react-router";
import API from "../../utils/API";
import convertDT from "../functions";
import TaskPopup from "../TaskPopup";

import UserContext from "../../UserContext";

var Highcharts = require("highcharts");
class TaskPage extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { tasks: [], graphData: [] };

  componentWillMount() {
    API.getTaskByGroup(this.props.groupID).then(res => {
      this.setState({ tasks: res });
    });
    API.getTaskData(this.props.groupID).then(res =>
      this.setState({ graphData: res })
    );
  }
  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <Container className="mx-0" fluid>
            <h1>{this.props.groupName} - Tasks</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <div>
                <h2>Overview</h2>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={{
                    chart: { type: "pie" },
                    title: { text: "Tasks Distribution" },
                    series: [
                      {
                        name: "Tasks",
                        data: this.state.graphData
                      }
                    ]
                  }}
                />
              </div>
              <div>
                <Table>
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Assignee</td>
                      <td>Due</td>
                      <td>Status</td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.tasks.map(task => (
                      <tr key={task.taskId}>
                        <td>{task.taskName}</td>
                        <td>
                          {task.userId === user.user_id ? "You" : task.username}
                        </td>
                        <td>{convertDT(task.deadline)}</td>
                        <td>{task.status}</td>
                        <td>
                          <TaskPopup group = {this.props.groupID} task={task} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </Container>
        )}
      </UserContext.Consumer>
    );
  }
}

export default withRouter(TaskPage);
