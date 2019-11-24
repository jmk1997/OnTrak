import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import HighchartsReact from "highcharts-react-official";
import API from "../../utils/API";

import Popup from "reactjs-popup";
import convertDT from "../functions";

import { withRouter } from "react-router";
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
                  <tr>
                    <td>{task.taskName}</td>
                    <td>{task.username}</td>
                    <td>{convertDT(task.deadline)}</td>
                    <td>{task.status}</td>
                    <td>
                      <Popup
                        trigger={<Button>View</Button>}
                        modal
                        // position="right center"
                      >
                        <h1>{task.taskName}</h1>
                        <h2>Assignee: {task.userId}</h2>
                        <h2>Due: {convertDT(task.deadline)}</h2>
                        <h3>Links:</h3>
                        {task.userId === this.props.user.user_id ? (
                          <Button>Add Link</Button>
                        ) : (
                          <div />
                        )}
                        <h3>Comments:</h3>
                        {task.userId !== this.props.user.user_id ? (
                          <Button>Add Comment</Button>
                        ) : (
                          <div />
                        )}
                      </Popup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(TaskPage);
