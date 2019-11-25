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

import NavDropdown from "react-bootstrap/NavDropdown";
import DashboardPage from "./pages/DashboardPage";

var Highcharts = require("highcharts");


class TertiaryNavbar extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { tasks: [], recent:[], graphData:[]};
  componentDidMount() {
        API.getTaskByGroup(this.props.groupID).then(res =>
          this.setState({ tasks: res })
        );
          API.getTaskData(this.props.groupID).then(res =>
            this.setState({graphData: res})
            );
  }



  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <Router>
            
            <Navbar expand="xl" bg="primary" variant="dark" className="TerNav" style={{width: 'auto', float: 'center'}}>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
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
                render={() => <DashboardPage groupID={this.props.groupID} groupName={this.props.groupName} parse = {user.user_Id, this.props.groupID}/>}
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
