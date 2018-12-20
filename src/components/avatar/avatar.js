import React from "react";
import "./avatar.css";

const DEFAULT_AVATAR = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png';

const Avatar = (props) => {
    const imageLink = props.imageLink ? props.imageLink : DEFAULT_AVATAR;
    return (
        <img src={imageLink}
             alt=""
             className="avatar"
        />
    )
}

export default Avatar;