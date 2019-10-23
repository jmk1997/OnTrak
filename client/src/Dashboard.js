import React, { Component } from 'react';
import lake from './lake.jpg';
import './Dashboard.css';

class Dashboard extends Component {

    render() {
      return (
      <div className="App" id="app-div">
        <div className="mainContainer">
          <div className="content">

            <div className="courseHeader">
                <img src={lake} />
                <div>
                    <h1>SE350: Object Orientated Software Development<br/>Autumn Quarter 2019</h1>
                </div>
            </div>
            
            <div className="notifications">
                <h3>New Notifications</h3>
                <hr/>
            </div>

            <div className="pinnedMsg">
                <h3>Pinned Messages</h3>
                <hr/>
            </div>

          </div>
          
        </div>
        
      </div>
      );
    }
  }
  
  export default Dashboard;