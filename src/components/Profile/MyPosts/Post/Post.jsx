import React from 'react';
import style from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className="avatar"><img src="" alt=""/></div>
            <div className="text">{props.message}</div>
        </div>
    );
}
export default Post;