import {Fragment, useRef, useState} from "react";
import { Prompt } from 'react-router-dom';
import {Card} from "react-bootstrap";

import classes from '../../css/posts/PostForm.module.css'

function PostsForm() {
    const [isEntering, setIsEntering] = useState(false);

    const titleInputRef = useRef();
    const textInputRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredText = textInputRef.current.value;
        console.log(enteredText)
        console.log(enteredTitle)
    }

    const finishEnteringHandler = () => {
        setIsEntering(false);
    };

    const formFocusedHandler = () => {
        setIsEntering(true);
    };

    return (
        <Fragment>
            <Prompt
                when={isEntering}
                message={(location) =>
                    'Are you sure you want to leave? All your entered data will be lost!'
                }
            />
            <Card>
                <form
                    onFocus={formFocusedHandler}
                    className={classes.form}
                    onSubmit={submitFormHandler}
                >

                    <div className={classes.control}>
                        <label htmlFor='author'>Title</label>
                        <input type='text' id='author' ref={titleInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='text'>Text</label>
                        <textarea id='text' rows='5' ref={textInputRef}/>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={finishEnteringHandler} className='btn-outline-primary'>Add Post</button>
                    </div>
                </form>
            </Card>
        </Fragment>
    );
}

export default PostsForm;
