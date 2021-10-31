import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    // Using this hook we can directly get access to the element from DOM.
    // This hook must be passed to the attribute "ref" inside the element to be accessed
    // const bodyInputRef = useRef();

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        if (post.title !== '' && post.body !== '') {
            create(newPost);
        }
        setPost({title: '', body: ''});
    }

    return (
        <form>
            <MyInput
                value={post.title}
                type="text"
                placeholder="Title"
                onChange={event => setPost({...post, title: event.target.value})}/>
            <MyInput
                value={post.body}
                type="text"
                placeholder="Description"
                onChange={event => setPost({...post, body: event.target.value})}/>

            {/*Unruled element - НЕУПРАВЛЯЕМЫЙ*/}
            {/*<MyInput*/}
            {/*    ref={bodyInputRef}*/}
            {/*    type="text"*/}
            {/*    placeholder="Description"/>*/}
            <MyButton onClick={addNewPost}>Add post</MyButton>
        </form>
    );
};

export default PostForm;
