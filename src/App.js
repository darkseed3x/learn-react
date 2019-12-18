import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';


const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<div className="sidebar">
				<Navbar />
			</div>
			<div className="wrapper-main">
				<Profile />
				{/* <Dialogs /> */}
			</div>
		</div>

	);
}

export default App;
