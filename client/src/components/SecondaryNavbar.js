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
import TertiaryNavbar from "./TertiaryNavbar";

class SecondaryNavbar extends React.Component {
  constructor(props) {
    super(props);
  }
  //   state = { groups: [], courses: [] };
  state = { itemsToMap: [] };
  componentDidMount() {
    if (this.props.studentID) {
      API.groupsByUserById(this.props.studentID).then(res =>
        this.setState({ itemsToMap: res })
      );
    }
    if (this.props.courseID) {
      API.groupsByCourseById(this.props.courseID).then(res =>
        this.setState({ itemsToMap: res })
      );
    }
    if (this.props.profID) {
      API.coursesByUserById(this.props.profID).then(res =>
        this.setState({ itemsToMap: res })
      );
    }
  }
  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <Router>
            
            <Navbar expand="xl" bg="primary" variant="dark" className="SecNav" style={{width: 'auto%', float:'left'}}>
              <Navbar.Toggle aria-controls="responsive-top-navbar" />
              <Navbar.Collapse id="responsive-top-navbar">
                {/* <Navbar.Brand>OnTrak</Navbar.Brand> */}
                <Nav>
                
                  {this.props.studentID ? (
                    this.state.itemsToMap.map(group => (
                      <NavLink
                        key={`/group=${group.group_id}`}
                        exact
                        to={`/group=${group.group_id}`}
                        className="nav-link"
                        activeClassName="active"
                        
                      >
                        {group.group_title}
                      </NavLink>
                    ))
                  ) : this.props.profID ? (
                    this.state.itemsToMap.map(course => (
                      <NavLink
                        key={`/course=${course.course_id}`}
                        exact
                        to={`/course=${course.course_id}`}
                        className="nav-link"
                        activeClassName="active"
                      >
                        {course.course_name}
                      </NavLink>
                    ))
                  ) : this.props.courseID ? (
                    this.state.itemsToMap.map(group => (
                      <NavLink
                        key={`/course=${this.props.courseID}/group=${group.group_id}`}
                        exact
                        to={`/course=${this.props.courseID}/group=${group.group_id}`}
                        className="nav-link"
                        activeClassName="active"
                      >
                        {group.group_title}
                      </NavLink>
                    ))
                  ) : (
                    <div>Hmmm</div>
                  )}
                  
                </Nav>
              </Navbar.Collapse>
            </Navbar>
           
            
            <Switch>
              {this.props.studentID ? (
                this.state.itemsToMap.map(group => (
                  <Route
                    key={`/group=${group.group_id}`}
                    exact
                    path={`/group=${group.group_id}`}
                    render={() => <TertiaryNavbar groupID={group.group_id} groupName={group.group_title} viewChat={true}/>}
                  />
                ))
              ) : this.props.profID ? (
                this.state.itemsToMap.map(course => (
                  <Route
                    key={`/course=${course.course_id}`}
                    exact
                    path={`/course=${course.course_id}`}
                    render={() => (
                        // <div>Courses Here</div>
                      <SecondaryNavbar courseID={course.course_id} />
                    )}
                  />
                ))
              ) : this.props.courseID ? (
                this.state.itemsToMap.map(group => (
                  <Route
                    key={`/course=${this.props.courseID}/group=${group.group_id}`}
                    exact
                    path={`/course=${this.props.courseID}/group=${group.group_id}`}
                    render={() => <TertiaryNavbar groupID={group.group_id} groupName={group.group_title} viewChat={false}/>}
                  />
                ))
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

export default withRouter(SecondaryNavbar);
