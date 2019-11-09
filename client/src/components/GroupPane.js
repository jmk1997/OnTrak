import React from 'react';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'
import API from '../utils/API';

 export default class GroupPane extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        groups:[]
    }

    componentDidMount(){
        API.groupsByUserById(this.props.id).then((res) => this.setState({ groups: res}));
    }

    render(){
        return (
          <Row className="justify-content-center">
            <h1 className="text-center text-capitalize">Viewing all groups</h1>
            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Desc</th>
                </tr>
              </thead>
              <tbody>
                {this.state.groups.map(group => (
                    <tr key={group.group_id}>
                      <td>{group.group_id}</td>
                      <td>{group.group_title}</td>
                      <td>{group.group_desc}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Row>
        );
      }


 }