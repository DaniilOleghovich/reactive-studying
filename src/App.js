import React, {useEffect, useState} from "react";
import './styles/app.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./components/hooks/usePosts";
import PostService from "./components/API/PostService";
import Loader from "./components/UI/Loader/Loader";

function App() {

    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [isPostLoading, setIsPostLoading] = useState(false);

    //  This hook using lifecycles of React components. There are 3 lifecycles:
    //  1) Mount - when component is mounting to the DOM;
    //  2) Update - when component has some changes and we need to re-render it;
    //  3) Unmount - when component is unmounting from the DOM

    //  This hook will works once when the mounting of component is going to do
    //    useEffect(() => {
    //         console.log("adfadfasfasf")
    //     }, [])

    //  This hook will works always when the the component has changes and need to be re-render
    //    useEffect(() => {
    //         console.log("adfadfasfasf")
    //     }, [filter, ...])

    //  This hook will works if callback function returns some values. This will happen when the component is unmounted.
    //    useEffect(() => {
    //         return () => {
    //                  Need to clear localStorage, unsubscribe form listeners, etc...
    //             }
    //     }, [])

    useEffect(() => {
        fetchPost();
        }, [])

    async function fetchPost() {
        setIsPostLoading(true);
        setTimeout(async () => {
            const posts = await PostService.getAll();
            setPosts(posts);
            setIsPostLoading(false);
        }, 1000)
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">
        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
            Create post
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        { isPostLoading
            ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
            : <PostList remove={removePost} posts={sortedAndSearchedPosts}/>
        }
    </div >
  );
}

export default App;
