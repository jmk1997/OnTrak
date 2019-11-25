import React from "react";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router";
import Popup from "reactjs-popup";
import convertDT from "../functions";
import Switch from "react-switch";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import UserContext from "../../UserContext";
import API from "../../utils/API";

class CreateTaskPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
      console.log(this.state);
    };
    this.handleSubmit = event => {
      event.preventDefault();
      if (this.isValidInput()) {
        let { groupId, description, deadline, taskName,  userId, groupId2} = this.state;
        console.log(this.state);
        if (taskName.length >= 1 && description.length >= 0 ){
          console.log("making API post Request");
          API.postNewTask(this.state).then((res) => console.log(res) );
        }
      }
    };
    this.isValidInput = () => {
      if (this.state.taskName.length < 4) {
        return false;
      } else {
        return true;
      }
    };
    this.state = {
      groupId: this.props.groupID,
      description: '',
      deadline : '',
      taskName: '',
      userId: '',

      members: []
    };
  }

  componentDidMount() {
    API.getUsersByGroup(this.props.groupID).then(res => {
      this.setState({ members: res.data });
    });
  }
  render() {
    return (
      
      <UserContext.Consumer>
        {({ user }) => (
          <Popup
          
            trigger={<Button variant="success">Create New Task</Button>}
            modal
            contentStyle={{ margin: "100px", width: "40%", padding: "20px", height: '65%' }}
            className="mx-auto mb-2"
            // position="right center"
          >
                          
             <Form disabled={!this.isValidInput()} onSubmit={e => this.handleSubmit(e)} className="formSubmit">
            <Form.Row className="justify-content-center">
              <Form.Group controlId="newTaskName">
                <Form.Label ><h5>New Task Name</h5></Form.Label>
                <Form.Control size="lg" onChange={this.handleInputChange} type="text" name="taskName" placeholder="Task name" />
              </Form.Group>
              </Form.Row>
              <Form.Row className="justify-content-center">
              <Form.Group controlId="newDueDate">
                <Form.Label ><h5>Task Due Date</h5></Form.Label>
                <Form.Control size="lg" onChange={this.handleInputChange} type="date" name="deadline"/>
              </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-center" float>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label><h5>Enter a task description</h5></Form.Label>
                <Form.Control size="lg" onChange={this.handleInputChange} as="textarea" name="description" placeholder="Description here..." rows="3" />
              </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-center">
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label><h5>Assign to</h5></Form.Label>
                <Form.Control size = "lg" onChange={this.handleInputChange} as="select" name="userId">
                  {this.state.members.map(member =>( <option value={member.user_id}>{member.username}</option>))}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Button disabled={!this.isValidInput()} className="mx-auto mb-2" type="submit" size="block" variant="success" style={{width: '20%'}} >
              Create New Task
            </Button>
            
          </Form>
          </Popup>
        )}
      </UserContext.Consumer>
    );
  }
}

export default withRouter(CreateTaskPage);
