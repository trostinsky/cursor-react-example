import React from 'react';
import Avatar from "./avatar.js";
import styled from "styled-components";

const PostWrapper = styled.div`
    width: 400px;
    border: 2px solid #c0c0c0;
    margin: 40px 10px;
    padding: 20px;
`;

const PostLike = styled.img`
  width: 30px;
  height: 30px;
`;

export const Button = styled.button`
  display: block;
  width: ${props => props.width ? props.width : 200}px;
  height: 50px;
  color: #fff;
  border: 2px solid #fff;
  background-color: rgba(51,51,51,0.98);
  font-size: 16px;
  &.active{
    
  }
`;

class Post extends React.Component {
    state = {
        liked: false
    }

    toggleLike = () => {
        this.setState({
            liked: !this.state.liked
        }, () => {
            localStorage.setItem(`post-${this.props.id}`, Number(this.state.liked));
        });
    }

    componentDidMount() {
        const isLike = localStorage.getItem(`post-${this.props.id}`);
        console.log(Boolean(isLike));
        this.setState({
            liked: Number(isLike)
        })
    }

    render() {
        return (
            <PostWrapper>
                <p>
                    <Avatar imageLink={this.props.author.avatar}/>
                    {this.props.author.name}
                </p>
                <p>{this.props.date}</p>
                <div>
                    {this.props.children}
                </div>
                <div onClick={this.toggleLike}>
                    {
                        this.state.liked ?
                            <PostLike className="post-like" src="/img/liked.svg"/>
                            : <PostLike className="post-like" src="/img/not-liked.svg"/>
                    }
                </div>
                <Button>Кнопка!</Button>
            </PostWrapper>
        )
    }
}

export default Post;