import React from "react";
import Button from "react-bootstrap/Button";

import Table from "react-bootstrap/Table";
import { withRouter } from "react-router";
import Popup from "reactjs-popup";
import convertDT from "../functions";
import Switch from "react-switch";
import Form from "react-bootstrap/Form";

import UserContext from "../../UserContext";
import API from "../../utils/API";

class TaskPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: [], links: [], checked: false };
    this.handleChange = this.handleChange.bind(this);
    // this.handleChange = () => {
    //   let isChecked = this.state.checked;
    //   this.setState({ checked: !isChecked });
    //   if (this.state.checked === true) {
    //     API.markTaskAsDone(this.props.task.taskId).then((res) => console.log(res) );
    //   } else {
    //     API.markTaskAsNotDone(this.props.task.taskId).then((res) => console.log(res) );
    //   }
    // };
  }
  handleChange = () => {
    console.log("Before: ", this.state.checked);
    let isChecked = this.state.checked;
    this.setState({ checked: !isChecked });

    if (this.state.checked === true) {
      API.markTaskAsDone(this.props.task.taskId);
    } else {
      API.markTaskAsNotDone(this.props.task.taskId);
    }
    console.log("After: ", this.state.checked);
  };

  componentWillMount() {
    this.setState({
      checked: this.props.task.status === "Not Done" ? false : true
    });
    API.getCommentByTaskId(this.props.task.taskId).then(res => {
      this.setState({ comments: res });
    });
    API.getLinkByTaskId(this.props.task.taskId).then(res => {
      this.setState({ links: res });
    });
  }
  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <Popup
            trigger={<Button>View</Button>}
            modal
            contentStyle={{
              margin: "100px",
              width: "100%",
              // height: "100%",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <h1>{this.props.task.taskName}</h1>
              <h4 style={{ color: "black" }}>{this.props.task.description}</h4>
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
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <h3>Links:</h3>
                  <Table>
                    <tbody>
                      {this.state.links.map(l => (
                        <tr>
                          <td>
                            <a href={`http://${l.link}`} target="_">{l.displayText}</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  {this.props.task.userId === user.user_id ? (
                    <Form
                      // disabled={!this.isValidInput()}
                      // onSubmit={e => this.handleSubmit(e)}
                      className="text-center"
                    >
                      <Form.Row className="justify-content-center">
                        <Form.Group controlId="newURL">
                          {/* <Form.Label>Link URL</Form.Label> */}
                          <Form.Control
                            size="lg"
                            // onChange={this.handleInputChange}
                            type="text"
                            name="url"
                            placeholder="URL"
                          />
                        </Form.Group>
                        <Form.Group controlId="newDisplay">
                          {/* <Form.Label>Link Display</Form.Label> */}
                          <Form.Control
                            size="lg"
                            // onChange={this.handleInputChange}
                            type="text"
                            name="display"
                            placeholder="Display"
                          />
                        </Form.Group>
                      </Form.Row>
                    {user.access_id === 1 ? (<Button
                        // disabled={!this.isValidInput()}
                        className="w-50 mx-auto mb-2"
                        type="submit"
                        size="block"
                        variant="success"
                      >
                        Add Link
                    </Button>) : (<div/>)}
                    </Form>
                  ) : (
                    <div />
                  )}
                </div>
                <div>
                  <h3>Comments:</h3>
                  <Table>
                    <thead>
                      <tr>
                        <td>Comment</td>
                        <td>Score</td>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.comments.map(c => (
                        <tr>
                          <td>{c.text}</td>
                          <td>{c.score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  {this.props.task.userId !== user.user_id ? (
                    <Form
                      // disabled={!this.isValidInput()}
                      // onSubmit={e => this.handleSubmit(e)}
                      className="text-center"
                    >
                      <Form.Row className="justify-content-center">
                        <Form.Group controlId="comment">
                          <Form.Control
                            size="lg"
                            // onChange={this.handleInputChange}
                            type="text"
                            name="comment"
                            placeholder="Comment"
                          />
                        </Form.Group>
                        <Form.Group controlId="score">
                          <Form.Check
                            inline
                            type="radio"
                            label="&#128577;"
                            name="score"
                            id="1"
                          />
                          <Form.Check
                            inline
                            type="radio"
                            label="&#128528;"
                            name="score"
                            id="5"
                          />
                          <Form.Check
                            inline
                            type="radio"
                            label="&#128512;"
                            name="score"
                            id="10"
                          />
                        </Form.Group>
                      </Form.Row>
                      {user.access_id === 1 ? (<Button
                        // disabled={!this.isValidInput()}
                        className="w-50 mx-auto mb-2"
                        type="submit"
                        size="block"
                        variant="success"
                      >
                        Add Comment
                      </Button>) : (<div/>)}
                    </Form>
                  ) : (
                    <div />
                  )}
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
            {/* </div> */}
          </Popup>
        )}
      </UserContext.Consumer>
    );
  }
}

export default withRouter(TaskPopup);
