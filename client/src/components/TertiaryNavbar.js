import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";
import HighchartsReact from "highcharts-react-official";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import UserContext from "../UserContext";
import fakeChat from "../images/chat.png";

import { withRouter } from "react-router";

var Highcharts = require("highcharts");

var chart = (
  <HighchartsReact
    highcharts={Highcharts}
    options={{
      chart: { type: "pie" },
      title: { text: "Tasks Completed" },
      series: [
        {
          name: "Tasks",
          data: [
            {
              name: "User 1",
              y: 50
            },
            {
              name: "User 2",
              y: 20
            },
            {
              name: "User 3",
              y: 30
            }
          ]
        }
      ]
    }}
  />
);

class TertiaryNavbar extends React.Component {
  constructor(props) {
    super(props);
  }
  //   state = { groups: [], courses: [] };
  componentDidMount() {
    //     API.groupsByUserById(this.props.id).then(res =>
    //       this.setState({ groups: res })
    //     );
    // API.coursesByUserById(this.props.id).then(res =>
    //   this.setState({ courses: res })
    // );
  }
  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <Router>
            <Navbar expand="md" bg="dark" variant="dark">
              <Navbar.Toggle aria-controls="responsive-top-navbar" />
              <Navbar.Collapse id="responsive-top-navbar">
                {/* <Navbar.Brand>OnTrak</Navbar.Brand> */}
                <Nav>
                  <NavLink
                    exact
                    to={`/group=${this.props.groupID}`}
                    className="nav-link"
                    activeClassName="active"
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    exact
                    to={`/group=${this.props.groupID}/tasks`}
                    className="nav-link"
                    activeClassName="active"
                  >
                    Tasks
                  </NavLink>
                  {this.props.viewChat === true ? (
                    <NavLink
                      exact
                      to={`/group=${this.props.groupID}/chat`}
                      className="nav-link"
                      activeClassName="active"
                    >
                      Chat
                    </NavLink>
                  ) : (
                    <NavLink
                      exact
                      to={`/group=${this.props.groupID}/manage`}
                      className="nav-link"
                      activeClassName="active"
                    >
                      Manage
                    </NavLink>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Switch>
              <Route
                exact
                path={`/group=${this.props.groupID}`}
                render={() => (
                  <Container className="mx-0" fluid>
                    <h1>{this.props.groupName} - Dashboard</h1>
                    <h2>Group description goes here</h2>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <div>
                        <h3>Updates</h3>
                        <Table>
                          <tbody>
                            <tr>
                              <td>User1 commented on Task4</td>
                            </tr>
                            <tr>
                              <td>User2 upload a file to Task8</td>
                            </tr>
                            <tr>
                              <td>Reminder: Task 10 is due tomorrow</td>
                            </tr>
                          </tbody>
                        </Table>
                        <Button>View Past Notifications</Button>
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
                                Note from professor: Remember to comment your
                                code!
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </Container>
                )}
              />
              <Route
                exact
                path={`/group=${this.props.groupID}/tasks`}
                render={() => (
                  <Container className="mx-0" fluid>
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
                        {chart}
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
                            <tr>
                              <td>Task 2</td>
                              <td>User 1</td>
                              <td>11/30/19</td>
                              <td>To Do</td>
                              <td>></td>
                            </tr>
                            <tr>
                              <td>Task 8</td>
                              <td>User 1</td>
                              <td>12/02/19</td>
                              <td>In Progress</td>
                              <td>></td>
                            </tr>
                            <tr>
                              <td>Task 14</td>
                              <td>User 1</td>
                              <td>01/02/20</td>
                              <td>Done</td>
                              <td>></td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </Container>
                )}
              />
              {this.props.viewChat === true ? (
                <Route
                  exact
                  path={`/group=${this.props.groupID}/chat`}
                  render={() => (
                    <Container className="mx-0" fluid>
                      <h1>{this.props.groupName} - Chat</h1>
                      <img style={{ width: "100%" }} src={fakeChat}></img>
                    </Container>
                  )}
                />
              ) : (
                <Route
                  exact
                  path={`/group=${this.props.groupID}/manage`}
                  render={() => (
                    <Container className="mx-0" fluid>
                      <h1>{this.props.groupName} - Manage</h1>
                    </Container>
                  )}
                />
              )}
            </Switch>
          </Router>
        )}
      </UserContext.Consumer>
    );
  }
}

export default withRouter(TertiaryNavbar);
