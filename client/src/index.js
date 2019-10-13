import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Groups from './Groups';
import Dashboard from './Dashboard';
import Tasks from './Tasks';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Tasks/>, document.getElementById('root'));
registerServiceWorker();
