import React from 'react';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'
import API from '../utils/API';

 export default class Pane extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                <h5 class="card-title">{this.props.groupTitle}</h5>
                  <p class="card-text">{this.props.desc}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
        );
      }


 }