import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Groups from './Groups';
import Dashboard from './Dashboard';
import Test from './test';
import Login from './Login';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import { Route, HashRouter, BrowserRouter, Switch, Redirect } from 'react-router-dom';



ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();

