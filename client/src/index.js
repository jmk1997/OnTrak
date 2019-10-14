import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Groups from './Groups';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
