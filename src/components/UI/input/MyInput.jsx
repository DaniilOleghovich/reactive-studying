import React from 'react';
import classes from './MyInput.module.css'

//const MyInput = React.forwardRef(props, ref)... This is to tell React when we needed to pass reference
const MyInput = (props) => {
    return (
        <input className={classes.myInput} {...props}/>
    );
};

export default MyInput;
