import React from 'react';
import style from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.avatar}><img src="" alt=""/>AA</div>
            <div className={style.text}>{props.message}</div>
        </div>
    );
}
export default Post;