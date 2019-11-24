import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import HighchartsReact from "highcharts-react-official";
import API from "../../utils/API"

import { withRouter } from "react-router";
var Highcharts = require("highcharts");
class TaskPage extends React.Component{
    constructor(props) {
        super(props);
      }
      state = { tasks: [], graphData:[]};

      componentWillMount() {
        API.getTaskByGroup(this.props.groupID).then(res =>
          this.setState({ tasks: res })
        );
        API.getTaskData(this.props.groupID).then(res =>
            this.setState({graphData: res})
        );  

  }
  render() { return (
    <Container className="mx-0" style={{width: '85%'}} fluid>
      <h1>{this.props.groupName} - Tasks</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div style={{ flexGrow: 1 }}>
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
              </tr>
            </thead>
            <tbody>
              {this.state.tasks.map(task => (
                <tr>
                  <td>{task.taskName}</td>
                  <td>{task.userId}</td>
                  <td>{task.deadline}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </Container>
  )
  }
}

export default withRouter(TaskPage);