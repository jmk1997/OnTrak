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

import { withRouter } from "react-router";

var Highcharts = require("highcharts");

var chart = <HighchartsReact highcharts={Highcharts} options={{}} />;

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
                    <div style={{ display: "flex" }}>
                      <div>
                        <h2>Overview</h2>
                        {/* < */}
                      </div>
                      <div>
                        <Table>
                          <thead>
                            <tr>
                              <td>Part 1</td>
                              <td>Part 2</td>
                              <td>Part 3</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Task 1</td>
                              <td>Task 7</td>
                              <td>Task 12</td>
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
