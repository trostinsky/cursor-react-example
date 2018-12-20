import React from 'react';
import Avatar from "./avatar/avatar.js";

const Post = (props) => {
    return (
        <div>
            <p>
                <Avatar imageLink={props.author.avatar}/>
                {props.author.name}
            </p>
            <p>{props.date}</p>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Post;