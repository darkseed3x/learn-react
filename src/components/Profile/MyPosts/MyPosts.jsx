import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div className={style.posts}>
            <h2 className={style.title}>My Posts</h2>
            <textarea className={style.enter} name="" id=""></textarea>
            <button className={style.button}>send</button>
            {
                props.posts.map(message => <Post message={message.message}/>)
            }
        </div>
    );
}
export default MyPosts;