import {Fragment, useEffect, useCallback, useState} from 'react';
import PostList from "../components/posts/PostList";
import {Viewer} from "@toast-ui/react-editor";
import axios from "axios";

const AllPosts = () => {
    const header = `# Postのリストです！`
    const [postsList, setPostsList] = useState([])
    const getPostsListHandler = useCallback(async () => {

        try {
            await axios.get("/api/posts").then( result => {
                console.log(result.data)
                setPostsList(result.data)
            });
        } catch (err) {
            console.log(err);
        }
    }, [])

    useEffect(() => {
        getPostsListHandler();
    }, [getPostsListHandler]);

    return (
        <Fragment>
            <Viewer
                initialValue={header}
            />
            <PostList posts={postsList}/>
        </Fragment>
    )
}

export default AllPosts
