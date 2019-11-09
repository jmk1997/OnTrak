import React from 'react';
import Row from 'react-bootstrap/Row';
import Pane from './Pane';
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
                {this.state.groups.map(group => (
                    <Pane groupTitle = {group.group_title} desc = {group.group_desc}> </Pane>
                  ))
                }
            </Row>
        );
        
      }


 }