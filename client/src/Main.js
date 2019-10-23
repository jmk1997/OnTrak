import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter,
} from 'react-router-dom';
import logo from './OnTrak.png';
import avatar from './User.svg';
import bell from './Bell.svg';
import './Main.css';
import Dashboard from './Dashboard';
import Calendar from './Calendar';
import Tasks from './Tasks';
import Files from './Files';
import Chat from './Chat';
import Login from './Login';
import Test from './test';

class Main extends Component {

    render() {
      return (
        <HashRouter>
      <div className="App" id="app-div">
      
        <header>
            <img src={logo} className="logo" />

            <div className="userInfo">
                <h5>Course: <br/>Group: <br/>Term: </h5>
                
            </div>

            <nav>
                <ul>
                    <li><NavLink to="/Dashboard"><a href="#">DASHBOARD</a></NavLink></li>
                    <li><NavLink to="/Calendar"><a href="#">CALENDAR</a></NavLink></li>
                    <li><NavLink to="/Tasks"><a href="#">TASKS</a></NavLink></li>
                    <li><NavLink to="/Files"><a href="#">FILES</a></NavLink></li>
                    <li><NavLink to="/Chat"><a href="#">CHAT</a></NavLink></li>
                </ul>
            </nav>

            <a href="#"><img src={avatar} className="avatar" /></a>
            <a href="#"><img src={bell} className="bell" /></a>
            
            
        </header>
        
        <div className="mainContainer">
        <Route exact path="/Dashboard" component={Dashboard}/>
        <Route path="/Calendar" component={Calendar}/>
        <Route path="/Tasks" component={Tasks}/>
        <Route path="/Files" component={Files}/>
        <Route path="/Chat" component={Chat}/>
          
        </div>
        
      </div>
      </HashRouter>
      );
    }
  }
  
  export default Main;