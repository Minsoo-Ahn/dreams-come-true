import {Fragment, useRef, useState} from "react";
import {Prompt} from 'react-router-dom';
// TOAST UI Editor import
import '@toast-ui/editor/dist/toastui-editor.css';
import {Editor} from '@toast-ui/react-editor';

// TOAST UI Editor Plugins
import chart from '@toast-ui/editor-plugin-chart';
import '@toast-ui/chart/dist/toastui-chart.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import '@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css';

import uml from '@toast-ui/editor-plugin-uml';

import classes from '../../css/posts/PostForm.module.css'
import Post from "../../models/Post";
import axios from "axios";

function PostForm() {
    const [isEntering, setIsEntering] = useState(false);

    const titleInputRef = useRef();
    const editorRef = useRef();
    const [formInfo, setFormInfo] = useState(Post)

    async function submitFormHandler(event) {
        event.preventDefault();

        const title = titleInputRef.current.value;
        const content = editorRef.current.getInstance().getMarkdown();
        Post.title = title
        Post.content = content
        setFormInfo(Post)

        // await axios
        //     .post("/api/addPost", {
        //         title: formInfo.title,
        //         content: formInfo.content
        //     })
        //     .then((result) => {
        //         console.log("successfully posted")
        //     })
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
                        plugins={[chart, codeSyntaxHighlight, colorSyntax, tableMergedCell, uml]}
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
