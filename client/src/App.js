import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logoBlue from './OnTrak_blue.png';
import loginImg from './chi.jpg';
import './App.css';
import Groups from './Groups';



class App extends Component {
  
  mysql = require('mysql');

  con = this.mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
  });

  con.connect();

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
    };
  }


  
  mySubmitHandler = (event) => {
    event.preventDefault();
    let userEmail = this.state.email;
    let userPass = this.state.pass;
    if (userEmail == "test@mail.com") {
      console.log("Got email");
      if (userPass == "test") {
        console.log("Hello user test");
      }
      else {
        console.log("Wrong pass");
      }
    }
    else {
      console.log("No email found")
    }
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  

  render() {
    return (
      
    
      <div className="App" id="app-div">
        <img src={loginImg} className="loginImage" />

        <div className="loginForm">
          <img src={logoBlue} className="logoLogin" />

          <form  onSubmit={this.mySubmitHandler}>
            <div className="formGroup">
              <input type="text" name="email" id="email" placeholder="Email" onChange={this.myChangeHandler} required />
            </div>

            <div className="formGroup">
              <input type="text" name="pass" id="pass" placeholder="Password" onChange={this.myChangeHandler} required />
            </div>

            <div className="formSubmit">
              
              <input type="submit" value="Login" className="submit" name="submit" id="submit" />
              
            </div>
          </form>
        </div>
      </div>
    
    );
  }
}

export default App;
