import React from 'react';
import style from'./Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (
        <main className={style.profile}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}/>
        </main>
    );
}
export default Profile;
