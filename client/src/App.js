import React, { Component } from 'react';
import logoBlue from './OnTrak_blue.png';
import loginImg from './chi.jpg';
import './App.css';
import Groups from './Groups';

class App extends Component {
  

  render() {
    return (
      
    
      <div className="App" id="app-div">
        <img src={loginImg} className="loginImage" />

        <div className="loginForm">
          <img src={logoBlue} className="logo" />

          <form  onSubmit={this.handleSubmit}>
            <div className="formGroup">
              <input type="email" name="email" id="email" placeholder="Email" required />
            </div>

            <div className="formGroup">
              <input type="pass" name="pass" id="pass" placeholder="Password" required />
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
