import {Fragment} from "react";
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import {Viewer} from '@toast-ui/react-editor';
import classes from "../../css/posts/PostForm.module.css";

function PostDetail(props) {
    return (
        <Fragment>
            {props.location.param == null && <div>データが存在しません。また試ししてください。</div>}
            {props.location.param != null &&
            <>
                <div className={classes.control}>
                    <h1> {props.location.param.category == null ? "All" : props.location.param.category} </h1>
                </div>
                <div className={classes.control}>
                    <h1>{props.location.param.title} </h1>
                </div>
                <div className={classes.control}>
                    <Viewer
                        initialValue={props.location.param.content}
                    />
                </div>
            </>}

        </Fragment>
    )
}

export default PostDetail
