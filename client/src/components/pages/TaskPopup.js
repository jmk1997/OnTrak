import React from "react";
import Button from "react-bootstrap/Button";
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
    // if (this.state.checked === true) {
    //   API.markTaskAsDone(this.props.task.taskId);
    // } else {
    //   API.markTaskAsNotDone(this.props.task.taskId);
    // }
    console.log("After: ", this.state.checked);
  };

  componentWillMount() {
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
            contentStyle={{ margin: "auto", width: "50%", padding: "20px", height: "90%" }}
            className="mx-auto mb-2"
            // position="right center"
          >
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
                <h2 >
                    Assignee:{" "}
                    {this.props.task.userId === user.user_id
                      ? "You"
                      : this.props.task.username}
                  </h2>

                  <h2>
                    Due: {convertDT(this.props.task.deadline)}
                  </h2>

                  <br/>
                  {/*
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  
                      
                  
                </div>
                */}
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                  
                >
                  <div>
                    <h3>Links:</h3>
                    {this.props.task.userId === user.user_id ? (
                      <Form
                        // disabled={!this.isValidInput()}
                        // onSubmit={e => this.handleSubmit(e)}
                        className="text-center p-3"
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
                        <Button
                          // disabled={!this.isValidInput()}
                          className="w-50 mx-auto mb-2"
                          type="submit"
                          size="block"
                          variant="success"
                        >
                          Add Link
                        </Button>
                      </Form>
                    ) : (
                      // <Button>Add Link</Button>
                      <div />
                    )}
                  </div>
                  <div>
                    <h3>Comments:</h3>
                    {this.props.task.userId !== user.user_id ? (
                      <Form
                        // disabled={!this.isValidInput()}
                        // onSubmit={e => this.handleSubmit(e)}
                        className="text-center p-3"
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
                          {/* <Form.Group controlId="score"> */}
                            <Form.Check inline type="radio" label="&#128577;" id="1" />
                            <Form.Check inline type="radio" label="&#128528;" id="2" />
                            <Form.Check inline type="radio" label="&#128512;" id="3" />
                          {/* </Form.Group> */}
                        </Form.Row>
                        <Button
                          // disabled={!this.isValidInput()}
                          className="w-50 mx-auto mb-2"
                          type="submit"
                          size="block"
                          variant="success"
                        >
                          Add Comment
                        </Button>
                      </Form>
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
          </Popup>
        )}
      </UserContext.Consumer>
    );
  }
}

export default withRouter(TaskPopup);
