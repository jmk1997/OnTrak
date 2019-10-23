import React, { Component } from 'react';
import Login from './Login';
import Groups from './Groups';

import Main from './Main';
import './App.css';
import Test from './test';

import { Route, HashRouter } from 'react-router-dom';


class App extends Component {
  
  render() {
    return (
      <HashRouter>
      <div>
        
            <Route exact path="/" component={ Login }  />
            <Route path="/Groups" component={ Groups } />
            <Route path="/Main" component={ Main } />
          
      </div>
    </HashRouter>
    
    );
  }
}

export default App;
