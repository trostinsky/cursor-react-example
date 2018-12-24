import React from "react";
import styled from "styled-components";

const DEFAULT_AVATAR = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png';
const AvatarImage = styled.img`
    border-radius: 50%;
    width: 40px;
    height: 40px;
`;
const Avatar = (props) => {
    const imageLink = props.imageLink ? props.imageLink : DEFAULT_AVATAR;
    return (
        <AvatarImage src={imageLink}
             alt=""
             className="avatar"
        />
    )
}

export default Avatar;