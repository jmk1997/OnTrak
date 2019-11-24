import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import API from '../utils/API';
export default class AdminCreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
    this.handleSubmit = event => {
      event.preventDefault();
        let { groupId, description, deadline, taskName, userID} = this.state;
        console.log(this.state);
          console.log("making API post Request");
          API.postNewTask(this.state).then((res) => console.log(res) );
        this.props.toggleCreateComponent();
    };
    this.state = {
        groupId: '',
        description: '',
        deadline: '',
        taskName: '',
        userId: '',
    };
  }

  render() {
    return(
      <div>
        <Form>
            <Form.Row className="justify-content-center">
              <Form.Group controlId="newUsername">
                <Form.Label>New Task</Form.Label>
                <Form.Control size="lg" onChange={this.handleInputChange} type="text" name="description" placeholder="Description" />
              </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-center">
              <Form.Group controlId="newAId">
                <Form.Label>Deadline</Form.Label>
                <Form.Control size="lg" onChange={this.handleInputChange} type="text" name="deadline" placeholder="MM/DD/YYYY" />
              </Form.Group>
            </Form.Row>
            <Button className="w-50 mx-auto mb-2" type="submit" size="block" variant="success">
              Create
            </Button>
        </Form>
      </div>
    );
  }
}

