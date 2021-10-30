import React, {useState} from "react";
import './styles/app.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Java', body: 'Description'},
        {id: 3, title: 'C++', body: 'Description'}
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        {posts.length > 0
            ? <PostList remove={removePost} posts={posts}/>
            : <h1 style={{textAlign: 'center', marginTop: '10px'}}>Posts is not found!</h1>
        }
    </div >
  );
}

export default App;
