import React from 'react';
import './Profile.scss'

const Profile = () => {
    return (
        <main className="profile">
            <div className="man-description flex-container">
                <div className="ava"><img src="./sources/Icon_1.png" alt=""/></div>
                <div className="man-info column-container">
                    <span>Date of Birth: 2 january</span>
                    <span>City: Minsk</span>
                    <span>Education: BSU '11</span>
                    <span>Web Site: https://it-kamasutra.com</span>
                </div>
            </div>
            <div className="posts column-container">
                <h2 className="posts__title">My Posts</h2>
                <textarea className="posts__text" name="" id=""></textarea>
                <button className="posts__button">send</button>
            </div>
        </main>
    );
}
export default Profile;
