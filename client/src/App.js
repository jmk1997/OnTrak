import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import API from "./utils/API";
// import StudentGroups from './pages/Student_Groups';
// import ProfessorCourses from './pages/Professor_Courses';
// import AdminManage from './pages/Admin_Manage';
import ManageGroups from "./pages/ManageGroups";
import ManageUsers from "./pages/ManageUsers"
import LandingAll from "./pages/Landing_All";
import Login from "./pages/Login";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import TopNavbar from "./components/TopNavbar"; //WrappedWithRouter
import UserContext from "./UserContext";
/* eslint-disable no-console */
import PrivateAccessRoute from "./components/PrivateAccessRoute";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.postUserLogin = userData => {
      if (userData) {
        API.postUserLogin(userData, (err, res) => {
          if (err === true) {
            return console.log("an error occurred failed to log user in.");
          }
          this.setState({ user: res.user });
        });
      }
    };
    this.getUserLogout = event => {
      event.preventDefault();
      API.getLoggedOut().then(this.getUserStatus);
    };
    this.getUserStatus = () => {
      API.getLoginStatus().then(res => {
        if (res) {
          this.setState({ user: res.user });
        }
      });
    };
    this.state = {
      user: {
        access_id: 0,
        type: "Guest",
        user_id: 0,
        username: "guest"
      },
      getUserStatus: this.getUserStatus,
      getUserLogout: this.getUserLogout,
      postUserLogin: this.postUserLogin
    };
  }
  componentDidMount() {
    if (this.state.user.access_id === 0) {
      this.getUserStatus();
    }
  }
  render() {
    let { user } = this.state;
    return (
      <UserContext.Provider value={this.state}>
        <Router>
          {user.access_id === 0 ? (
            <Container className="mx-0" fluid>
              <Login />
              <Redirect to="/" />
            </Container>
          ) : (
            <div>
              <TopNavbar />
              <Container className="mx-0" fluid>
                <Switch>
                  <PrivateAccessRoute
                    strict exact path="/"
                    component={LandingAll}
                    aId={user.access_id}
                  />
                  <PrivateAccessRoute
                    strict exact path="/ManageUsers"
                    component={ManageUsers}
                    aId={3}
                  />
                  <PrivateAccessRoute
                    strict exact path="/ManageGroups"
                    component={ManageGroups}
                    aId={3}
                  />
                  <Route component={NoMatch} />
                </Switch>
              </Container>
            </div>
          )}
        </Router>
      </UserContext.Provider>
    );
  }
}
export default App;
