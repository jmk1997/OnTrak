import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import { withRouter } from "react-router";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import UserContext from "../UserContext";
import RenderIfAId from "./RenderIfAId";
import API from "../utils/API";

import Container from "react-bootstrap/Container";

import Pane from "./Pane";

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
                    to={`/group=${this.props.group}`}
                    className="nav-link"
                    activeClassName="active"
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    exact
                    to={`/group=${this.props.group}/tasks`}
                    className="nav-link"
                    activeClassName="active"
                  >
                    Tasks
                  </NavLink>
                  {this.props.viewChat === true ? (
                    <NavLink
                      exact
                      to={`/group=${this.props.group}/chat`}
                      className="nav-link"
                      activeClassName="active"
                    >
                      Chat
                    </NavLink>
                  ) : (
                    <div />
                  )}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Switch>
              <Route
                exact
                path={`/group=${this.props.group}`}
                render={() => (
                  <Container className="mx-0" fluid>
                    <h1>{this.props.groupName} - Dashboard</h1>
                  </Container>
                )}
              />
              <Route
                exact
                path={`/group=${this.props.group}/tasks`}
                render={() => (
                  <Container className="mx-0" fluid>
                    <h1>{this.props.groupName} - Tasks</h1>
                  </Container>
                )}
              />
              {this.props.viewChat === true ? (
                <Route
                  exact
                  path={`/group=${this.props.group}/chat`}
                  render={() => (
                    <Container className="mx-0" fluid>
                      <h1>{this.props.groupName} - Chat</h1>
                    </Container>
                  )}
                />
              ) : (
                <div />
              )}
            </Switch>
          </Router>
        )}
      </UserContext.Consumer>
    );
  }
}

export default withRouter(TertiaryNavbar);
