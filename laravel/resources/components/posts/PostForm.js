import {Fragment, useRef, useState} from "react";
import {Prompt} from 'react-router-dom';
import {Card} from "react-bootstrap";
import '@toast-ui/editor/dist/toastui-editor.css';

import {Editor} from '@toast-ui/react-editor';

import classes from '../../css/posts/PostForm.module.css'


function PostForm() {
    const [isEntering, setIsEntering] = useState(false);

    const titleInputRef = useRef();
    const textInputRef = useRef();
    const editorRef = useRef();


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

    const handleEditorChange = (html, text) => {
        console.log('handleEditorChange', html, text);
    }

    return (
        <Fragment>
            <Prompt
                when={isEntering}
                message={(location) =>
                    'Are you sure you want to leave? All your entered data will be lost!'
                }
            />
            <form
                onFocus={formFocusedHandler}
                className={classes.form}
                onSubmit={submitFormHandler}
            >

                <div className={classes.control}>
                    <label htmlFor='author'>Title</label>
                    <input type='text' id='title' ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='text'>Text</label>
                    <Editor
                        previewStyle="vertical"
                        height="500px"
                        initialEditType="WYSIWYG"
                        initialValue=""
                        ref={editorRef}
                    />
                </div>
                <div className={classes.actions}>
                    <button onClick={finishEnteringHandler} className='btn-primary'>Submit</button>
                    <button className='btn-danger'>Cancel</button>
                </div>
            </form>
        </Fragment>
    );
}

export default PostForm;
