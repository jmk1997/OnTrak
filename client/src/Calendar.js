import React, { Component } from 'react';
import avatar from './User.svg';
import arrow from './arrow.png';
import './Calendar.css';


class Calendar extends Component {

    render() {
      return (
      <div className="App" id="app-div">
      
        <div className="mainContainer">
          <div className="content">

            <div className="calLeft">
                Calendar
            </div>

            <div className="upcomingTasksRight">
                <h3 style={{color:'lightgray'}}>Upcoming Tasks</h3>

            <div className="assignedTaskWrapper">
                <div className="assignedTask">
                    <img src= {avatar} />
                    <h2>Task 1</h2>
                    <p>September 12, 2019</p>
                </div>

                <div className="assignedTaskInfo">
                    <a href="#"><img src= {arrow} /></a>
                    <p>12:00PM</p>
                </div>
            </div>

            <div className="assignedTaskWrapper">
                <div className="assignedTask">
                    <img src= {avatar} />
                    <h2>Task 1</h2>
                    <p>September 12, 2019</p>
                </div>

                <div className="assignedTaskInfo">
                    <a href="#"><img src= {arrow} /></a>
                    <p>12:00PM</p>
                </div>
            </div>

            <div className="assignedTaskWrapper">
                <div className="assignedTask">
                    <img src= {avatar} />
                    <h2>Task 1</h2>
                    <p>September 12, 2019</p>
                </div>

                <div className="assignedTaskInfo">
                    <a href="#"><img src= {arrow} /></a>
                    <p>12:00PM</p>
                </div>
            </div>

            </div>

          </div>
          
        </div>
        
      </div>
      );
    }
  }
  
  export default Calendar;
