import React from 'react';
import PostItem from "./PostItem";

const PostList = ({remove, posts}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                List of Posts
            </h1>

            {posts.map((post, index) =>
                <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;
