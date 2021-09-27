import {Fragment} from "react";
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import {Viewer} from '@toast-ui/react-editor';
import classes from "../../css/posts/PostForm.module.css";

function PostDetail() {
    const test = `# markdown`
    return (
        <Fragment>
            <div className={classes.control}>
                <h1> TITLE </h1>
            </div>
            <div className={classes.control}>
                <Viewer
                    initialValue={test}
                />
            </div>
        </Fragment>
    )
}

export default PostDetail
