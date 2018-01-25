import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import JyankenGamePage from './JyankenGamePage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<JyankenGamePage />, document.getElementById('root'));
registerServiceWorker();
