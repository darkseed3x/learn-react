import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const post =[
    {id : 1, message : 'aaaaa'},
    {id : 2, message : 'bbbbbbb'},
    {id : 3, message : 'ddddddddddd'},
]
const dialogs = [
    {id: 1, name : "Michael"},
    {id: 2, name : "Lars"},
    {id: 3, name : "Stefan"},
    {id: 4, name : "Basil"},
    {id: 5, name : "Angelika"},
    {id: 6, name : "Maria"},
];
const messages = [
    {id: 1, message : "aaaaaa"},
    {id: 2, message : "dddddd"},
    {id: 3, message : "ffffff"},
    {id: 4, message : "gggggggg"},
    {id: 5, message : "sdfsdfghsdf"},
    {id: 6, message : "sdfgdfsghdfh"},
];
ReactDOM.render(<App posts ={post} dialogs ={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
