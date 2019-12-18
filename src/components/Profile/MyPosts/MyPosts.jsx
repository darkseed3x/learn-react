import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={style.posts}>
            <h2 className={style.title}>My Posts</h2>
            <textarea className={style.enter} name="" id=""></textarea>
            <button className={style.button}>send</button>
            <Post message='aaaaaaaaa'/>
            <Post message='bbbbbbbbb'/>
            <Post message='ccccccccc'/>
        </div>
    );
}
export default MyPosts;