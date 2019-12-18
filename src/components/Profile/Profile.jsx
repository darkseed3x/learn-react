import React from 'react';
import style from'./Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <main className={style.profile}>
            <div className={style.profile_wrapper}>
                <div className={style.avatar}><img src="./sources/Icon_1.png" alt=""/></div>
                <div className={style.info}>
                    <span>Date of Birth: 2 january</span>
                    <span>City: Minsk</span>
                    <span>Education: BSU '11</span>
                    <span>Web Site: https://it-kamasutra.com</span>
                </div>
            </div>
            <MyPosts />
        </main>
    );
}
export default Profile;
