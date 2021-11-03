import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({remove, posts}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center', marginTop: '10px'}}>
                Posts is not found!
            </h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                List of Posts
            </h1>

            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post">
                        <PostItem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
