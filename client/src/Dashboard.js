import React, { Component } from 'react';
import logo from './OnTrak.png';
import avatar from './User.svg';
import bell from './Bell.svg';
import lake from './lake.jpg';
import './Dashboard.css';

class Dashboard extends Component {

    render() {
      return (
      <div className="App" id="app-div">
      
        <header>
            <img src={logo} className="logo" />

            <div className="userInfo">
                <h5>Course: <br/>Group: <br/>Term: </h5>
                
            </div>

            <nav>
                <ul>
                    <li><a class="active" href="#">DASHBOARD</a></li>
                    <li><a href="#">CALENDAR</a></li>
                    <li><a href="#">TASKS</a></li>
                    <li><a href="#">FILES</a></li>
                    <li><a href="#">CHAT</a></li>
                </ul>
            </nav>

            <a href="#"><img src={avatar} className="avatar" /></a>
            <a href="#"><img src={bell} className="bell" /></a>
            
            
        </header>
        
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