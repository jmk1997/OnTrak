import React, { Component } from 'react';
import pie from './pie.png';
import av from './User.svg';
import './Tasks.css';

class Tasks extends Component {

    
    render() {
      return (
       
      <div className="App" id="app-div">
      
        <div className="mainContainer">
          <div className="content">
            
            <div className="rightTasksSection">
                <div className="seperatedParts">
                    <h2>Part 1</h2>
                </div>
                <div className="seperatedParts">
                    <h2>Part 2</h2>
                </div>
                <div className="seperatedParts">
                    <h2>Part 3</h2>
                </div>
                <div className="seperatedParts">
                    <h2>Part 4</h2>
                </div>
            </div>

            <div className="leftOverview">
                <div className="topOverview">
                    <h2 style={{color: 'grey'}}>Overview</h2>
                    <img src={pie} />
                </div>

                <div className="bottomOverview">
                    <div className="userTasksC">
                        <img src={av} />
                        <p>5 tasks completed</p>
                    </div>

                    <div className="userTasksC">
                        <img src={av} />
                        <p>5 tasks completed</p>
                    </div>

                </div>
               
            </div>
           

          </div>
          
        </div>
        
      </div>
      );
    }
  }
  
  export default Tasks;