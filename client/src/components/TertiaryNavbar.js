import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";
import HighchartsReact from "highcharts-react-official";
import TaskPage from './pages/TaskPage'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import UserContext from "../UserContext";
import fakeChat from "../images/chat.png";
import API from "../utils/API"

import { withRouter } from "react-router";




class TertiaryNavbar extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { tasks: [], recent:[], graphData:[]};
  componentDidMount() {
        API.getTaskByGroup(this.props.groupID).then(res =>
          this.setState({ tasks: res })
        );
        API.getRecentTaskByGroup(this.props.groupID).then(res =>
          this.setState({recent: res})
          );
          API.getTaskData(this.props.groupID).then(res =>
            this.setState({graphData: res})
            );  
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
                          <thead>
                            <tr>
                              <td>Name</td>
                              <td>Updated</td>
                              <td>Status</td>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.recent.map(task => (
                              <tr>
                                <td>{task.taskName}</td>
                                <td>{new Intl.DateTimeFormat('en-GB', { 
                                      year: 'numeric', 
                                      month: 'long', 
                                      day: '2-digit' 
                                    }).format(new Date(task.updatedDate))}</td>
                                <td>{task.status}</td>
                              </tr>
                            ))}
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
              
              {/* This is where tasks are bound to the component! */}
              <Route
                exact
                path={`/group=${this.props.groupID}/tasks`}
                render = {()=> <TaskPage groupID={this.props.groupID} groupName={this.props.groupName} />}
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
