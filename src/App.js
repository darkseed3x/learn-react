import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="sidebar">
        <Navbar />
      </div>
      <Profile />
    </div>
    
  );
}

export default App;
