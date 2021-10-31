import React from 'react';
import PostItem from "./PostItem";

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

            {posts.map((post, index) =>
                <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;
