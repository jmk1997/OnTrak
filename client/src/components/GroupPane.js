import React from "react";
import Row from "react-bootstrap/Row";
import Pane from "./Pane";
import Table from "react-bootstrap/Table";
import API from "../utils/API";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";

import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";

export default class GroupPane extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    groups: []
  };

  componentDidMount() {
    API.groupsByUserById(this.props.id).then(res =>
      this.setState({ groups: res })
    );
  }

  render() {
    return (
      <Router>
        <Navbar expand="md" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-top-navbar" />
          <Navbar.Collapse id="responsive-top-navbar">
            {/* <Navbar.Brand>Groups</Navbar.Brand> */}
            <Nav>
              {this.state.groups.map(group => (
                <Link
                  to={`/${group.group_id}`}
                  className="nav-link"
                  activeClassName="active"
                >
                  {group.group_title}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Container className="mx-0" fluid> */}
        <Switch>
          {this.state.groups.map(group => (
            <Route
              exact
              path={`/${group.group_id}`}
              component={Pane}
              groupTitle={group.group_title}
              desc={group.group_desc}
              GiD={group.group_id}
            />
          ))}
        </Switch>
        {/* </Container> */}
      </Router>

    );
  }
}
