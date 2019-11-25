import HighchartsReact from "highcharts-react-official";
import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { withRouter } from "react-router";
import API from "../../utils/API";
import convertDT from "../functions";
import TaskPopup from "./TaskPopup";
import CreateTaskPage from "./CreateTaskPage";

import UserContext from "../../UserContext";

var Highcharts = require("highcharts");
class TaskPage extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { tasks: [], graphData: [] , members: []};

  componentWillMount() {
    API.getTaskByGroup(this.props.groupID).then(res => {
      this.setState({ tasks: res });
    });
    API.getTaskData(this.props.groupID).then(res =>
      this.setState({ graphData: res })
    );
    API.getUsersByGroup(this.props.groupID).then(res => {
      this.setState({ members: res.data });
    });
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
              <Container className="mx-0" style={{width: '50%'}} fluid>
                <h2>Overview</h2>
                <HighchartsReact
                  style={{background: 'blue'}}
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
              </Container>
              <Container className="mx-0" fluid>
                <CreateTaskPage groupID = {this.props.groupID} user = {user.user_id}/>
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
                          <TaskPopup groupID = {this.props.groupID} task={task} members= {this.state.groupUser}/>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Container>
            </div>
          </Container>
        )}
      </UserContext.Consumer>
    );
  }
}

export default withRouter(TaskPage);
