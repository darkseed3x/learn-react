import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Header />
				<div className="sidebar">
					<Navbar />
				</div>
				<div className="wrapper-main">
					<Route path="/profile" render={()=> <Profile posts ={props.posts}/>}/>
					<Route path="/dialogs" render={()=> <Dialogs dialogs = {props.dialogs} messages = {props.messages}/>}/>

				</div>
			</div>
		</BrowserRouter>

	);
}

export default App;
