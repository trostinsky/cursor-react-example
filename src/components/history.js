import React from 'react';
import Avatar from "./avatar.js";

const History = (props) => {
    return (
        <div>
            <p>
                <Avatar imageLink={props.avatar}/>
                {props.name}
            </p>
            <p>{props.time}</p>
        </div>
    )
}

export default History;