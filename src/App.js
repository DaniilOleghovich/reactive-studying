import React, {useState} from "react";
import './styles/app.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Java', body: 'Description'},
        {id: 3, title: 'C++', body: 'Description'}
    ])

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // Using this hook we can directly get access to the element from DOM.
    // This hook must be passed to the attribute "ref" inside the element to be accessed
    // const bodyInputRef = useRef();

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        setPosts([...posts, newPost]);
        //?????
        setTitle(' ');
        setBody(' ');
    }

  return (
    <div className="App">
        <form>

            <MyInput
                type="text"
                placeholder="Title"
                onChange={event => setTitle(event.target.value)}/>
            <MyInput
                type="text"
                placeholder="Description"
                onChange={event => setBody(event.target.value)}/>

            {/*Unruled element - НЕУПРАВЛЯЕМЫЙ*/}
            {/*<MyInput*/}
            {/*    ref={bodyInputRef}*/}
            {/*    type="text"*/}
            {/*    placeholder="Description"/>*/}
            <MyButton onClick={addNewPost}>Add post</MyButton>
        </form>
        <PostList posts={posts}/>
    </div >
  );
}

export default App;
