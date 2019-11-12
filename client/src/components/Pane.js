import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import GroupPage from './GroupPage';

    const cardStyle = {
        color : 'black'
    };

 export default class Pane extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                <h5>{this.props.title}</h5>
                  <p className="card-text" style={cardStyle}>{this.props.desc}</p>
                  {/* <Router>

                    <Link to ="/group" class="btn btn-primary"> group </Link>

                    <Route path="/group" component={GroupPage} /> 
                  </Router> */}
                  {/* <a href="#" class="btn btn-primary">Group page</a> */}
                </div>
              </div>
            </div>
        );
      }


 }