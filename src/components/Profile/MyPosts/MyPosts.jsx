import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = ()=>{
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={style.posts}>
            <h2 className={style.title}>My Posts</h2>
            <textarea className={style.enter} ref={newPostElement}></textarea>
            <button className={style.button} onClick={addPost}>send</button>
            {
                props.posts.map(message => <Post message={message.message}/>)
            }
        </div>
    );
}
export default MyPosts;