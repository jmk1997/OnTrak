import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import HighchartsReact from "highcharts-react-official";
import API from "../../utils/API";
import convertDT from "../functions";
import { withRouter } from "react-router";
import UserContext from "../../UserContext";
var Highcharts = require("highcharts");
class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    
  }
  state = { recent: [], courseInfo: [] , score:''};

  componentWillMount() {
    API.getRecentTaskByGroup(this.props.groupID).then(res =>
      this.setState({ recent: res })
    );
    API.groupInfo(this.props.groupID).then(res => {
      this.setState({ courseInfo: res[0] });
    });
    API.getUserRating(this.props.parse).then(res => {
      this.setSTate({score:res.data})
    })
  }
  render() {
       return (


        <Container className="mx-0" style={{clear: 'both'}} fluid>
          <h1>{this.props.groupName} - Dashboard</h1>
          <hr/>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <div>
              <h3>Updates</h3>
              <Table>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Updated</td>
                    <td>Status</td>
                  </tr>
                </thead>          
                  <tbody>
                    {this.state.recent.map(task => (
                      <tr key={task.taskId}>
                        <td>{task.taskName}</td>
                        <td>{convertDT(task.updatedDate)}</td>
                        <td>{task.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Button>View Past Notifications</Button>
              </div>
              <div>
                {/* {this.state.courseInfo.map(course => ( */}
                <h6 className="text-dark">
                  {this.state.courseInfo.group_desc}
                </h6>
                <h6> {this.state.score} </h6>
                {/* ))} */}
              </div>
              <div>
                <h3>Pinned Items</h3>
                <Table>
                  <tbody>
                    <tr>
                      <td>Assignment.pdf</td>
                    </tr>
                    <tr>
                      <td>
                        Required Software
                        <br />
                        https://link.here
                        <br />
                        https://link.here
                        <br />
                        https://link.here
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Note from professor: Remember to comment your code!
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
        </Container>

      )
  }
}

export default withRouter(DashboardPage);
