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
                  <NavLink className="nav-link" activeClassName="active">
                    Dashboard
                  </NavLink>
                  <NavLink className="nav-link" activeClassName="active">
                    Tasks
                  </NavLink>
                  <NavLink className="nav-link" activeClassName="active">
                    Chat
                  </NavLink>
                  {/* {this.props.access_id === 1
                    ? this.state.groups.map(group => (
                        <NavLink
                          exact
                          to={`/${group.group_id}`}
                          className="nav-link"
                          activeClassName="active"
                        >
                          {group.group_title}
                        </NavLink>
                      ))
                    : this.state.courses.map(course => (
                        <NavLink
                          exact
                          to={`/${course.course_id}`}
                          className="nav-link"
                          activeClassName="active"
                        >
                          {course.course_name}
                        </NavLink>
                      ))} */}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Switch>
              {/* <Route></Route> */}
              {/* {this.props.access_id === 1
                ? this.state.groups.map(group => (
                    <Route
                      exact
                      path={`/${group.group_id}`}
                      render={() => (
                        <Pane
                          title={group.group_title}
                          desc={group.group_desc}
                          id={group.group_id}
                        />
                      )}
                    />
                  ))
                : this.state.courses.map(course => (
                    <Route
                      exact
                      path={`/${course.course_id}`}
                      render={() => (
                        <Pane
                          title={course.course_name}
                          desc={course.course_desc}
                          id={course.course_id}
                        />
                      )}
                    />
                  ))} */}
            </Switch>
          </Router>
        )}
      </UserContext.Consumer>
    );
  }
}

export default withRouter(TertiaryNavbar);
