import React from "react";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router";
import Popup from "reactjs-popup";
import convertDT from "./functions";
import Switch from "react-switch";

import UserContext from "../UserContext";
import API from "../utils/API";

class TaskPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: [], links: [], checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    console.log("Before: ", this.state.checked);
    if (checked === true) {
      this.setState({ checked: true });
      API.markTaskAsDone(this.props.task.taskId);
    } else {
      this.setState({ checked: false });
      API.markTaskAsNotDone(this.props.task.taskId);
    }
    console.log("After: ", this.state.checked);
  }

  componentWillMount() {
    API.getCommentByTaskId(this.props.task.taskId).then(res => {
      this.setState({
        comments: res
      });
    });
    this.setState({
      checked: this.props.task.status === "Not Done" ? false : true
    });
  }
  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <Popup
            trigger={<Button>View</Button>}
            modal
            contentStyle={{ margin: "100px", width: "100%", padding: "20px" }}
            children={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <h1>{this.props.task.taskName}</h1>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <h2>
                      Assignee:{" "}
                      {this.props.task.userId === user.user_id
                        ? "You"
                        : this.props.task.username}
                    </h2>

                    <h2 style={{ textAlign: "right" }}>
                      Due: {convertDT(this.props.task.deadline)}
                    </h2>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div>
                      <h3>Links:</h3>
                      {this.props.task.userId === user.user_id ? (
                        <Button>Add Link</Button>
                      ) : (
                        <div />
                      )}
                    </div>
                    <div>
                      <h3>Comments:</h3>
                      {this.props.task.userId !== user.user_id ? (
                        <Button>Add Comment</Button>
                      ) : (
                        <div />
                      )}
                      {this.state.comments.map(c => (
                        <p style={{ textAlign: "left" }} key={c.commentId}>
                          {c.text}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <h3 style={{ marginRight: "10px" }}>Not Done</h3>
                  <Switch
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    uncheckedIcon={false}
                    checkedIcon={false}
                  />
                  <h3 style={{ marginLeft: "10px" }}>Done</h3>
                </div>
              </div>
            }
            // position="right center"
          />
        )}
      </UserContext.Consumer>
    );
  }
}

export default withRouter(TaskPopup);
